// src/pages/admin/users.tsx
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  InputAdornment,
  SelectChangeEvent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  TablePagination,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Notifications as NotificationsIcon,
  HelpOutlined as HelpOutlineIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  PageContainer,
  MainContent,
  PageHeader,
  PageTitle,
  PageSubtitle,
  KPIGrid,
  KPICard,
  KPILabel,
  KPIValue,
  KPIPrimaryValue,
  KPIErrorValue,
  KPISecondaryValue,
  ActionBar,
  ActionBarLeft,
  ActionBarRight,
  SearchField,
  StyledSelect,
  AddUserButton,
  TableWrapper,
  StyledTable,
  UserCell,
  UserAvatar,
  UserInfo,
  UserName,
  UserID,
  ContactInfo,
  ContactEmail,
  ContactPhone,
  StatusChip,
  ActionButtons,
  ActionIconButton,
  StyledSelectCell,
} from "../../../styles/admin/Users.styles";

import {
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogActions,
  // Button,
  Avatar,
  // Typography,
  // Box,
  Divider,
  // Chip,
  CircularProgress,
} from "@mui/material";

import { useRouter } from "next/router";
import { useDeleteUserMutation, useGetUserByIdQuery, useGetUsersQuery, useUpdateUserRoleMutation } from "@/store/api/apiSlice";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { DeleteOutlineIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
// import IconButton from "@mui/material/IconButton";



import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";


// Types
interface User {
  id: string;
  name: string;
  userId: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  status: "Active" | "Inactive";
  avatar?: {
    url: string;
    publicId: string;
  };
  isActive: boolean;
  
}

// Mock data
// const mockUsers: User[] = [
//   {
//     id: "1",
//     name: "Rajesh Kumar",
//     userId: "USR-1042",
//     email: "rajesh.k@samrudh.in",
//     phone: "+91 98765 43210",
//     role: "Admin",
//     status: "Active",
//     avatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAHMGK3WJWTC5Lt5wXMnZT1n_QQiz4y3biHDTFIl8c88NZt6nOXJhe7pjglQn5A7pC3QrYiueqt2J0fs1dq14sL_MhaaJgBNgaa_r6QDzE9gL5Kh4pJWxeSmIoAPhdYhkqdY5KLaJO4xK5wVvDu0gYYk1IzUDJsvPnN4ilkVe82yVad8YNFfBz1Wion-gQGSvjsH7sHOpYM6qpAeiQP5O00-QasWQ_j0NmBenNKI6BpF_qHEJ6cGzgucEXeBBnCHaZCLg3xZeQI_i3t",
//   },
//   {
//     id: "2",
//     name: "Anita Sharma",
//     userId: "USR-1088",
//     email: "anita.s@samrudh.in",
//     phone: "+91 91234 56789",
//     role: "User",
//     status: "Active",
//     avatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBpFK1nysZu1FtjY4jxRqwZjIfsD15IGGg8HlvtskMzpMkH4veskw4bgdFMGDTy8-Udip4emgitWiHYh3OWibkWoxOiY4EZH5Y6sLR4D48SOfQ3SZoy5fc1xDzR0OXnm0gSJgrnHobnCTrttH4P7tL8zeEhgVqp7IgzVOA5VA2TKOHzgjfvzJjfDI0kumgtFIv2f0p0MG2Mp6Ie28fVwElwTJeB0-qigC0dR07YhoROPQ2xXkJURVlJ8YSyB03k5Mpcmv7mWab1QE6g",
//   },
//   {
//     id: "3",
//     name: "Vikram Singh",
//     userId: "USR-1102",
//     email: "vikram.singh@samrudh.in",
//     phone: "+91 99887 76655",
//     role: "User",
//     status: "Inactive",
//     avatar: "",
//   },
// ];

const UsersPage: NextPage = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openViewDialog, setOpenViewDialog] = useState(false);
// const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data : userdata, error, isLoading: userloading , isFetching,refetch} = useGetUsersQuery();
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();
  const {data: selectedUser,isLoading: userLoading} = useGetUserByIdQuery(selectedUserId!, {
    skip: !selectedUserId,
  });

  // if (userloading) {
  //   return (
  //     <CenterBox>
  //       <StatusCard>
  //         <Spinner />
  //         <StatusTitle>Loading users...</StatusTitle>
  //         <StatusText>Please wait while we fetch your data</StatusText>
  //       </StatusCard>
  //     </CenterBox>
  //   );
  // }

  if (userloading)
  return <LoadingState title="Loading users..." message="Please wait while we fetch your data." />;

if (error)
  return (
    <ErrorState
  title="Failed to Load users"
  message="Unable to fetch users."
  loading={isFetching}
  onRetry={refetch}
/>
  );

if (!userdata?.length)
  return (
    <EmptyState
      title="No user Found"
      message="Create your first user to get started."
    />
  );

  const formattedUsers: User[] = userdata?.map((user: any) => ({
    id: user._id,
    name: user.name,
    userId: user._id.slice(-6).toUpperCase(), // temporary display ID
    email: user.email,
    phone: user.phone || "-",
    role: user.role,
    status: user.isActive ? "Active" : "Inactive",
    avatar: user.avatar,
  }));

  // setUsers(formattedUsers);

  const users  = formattedUsers;


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRoleFilterChange = (event: any) => {
    setRoleFilter(event.target.value);
  };

  const handleStatusFilterChange = (event: any) => {
    setStatusFilter(event.target.value);
  };

  // const handleRoleChange = async (
  //   userId: string,
  //   newRole: "admin" | "user",
  // ) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/auth/users/${userId}/role`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           role: newRole,
  //         }),
  //       },
  //     );

  //     const data = await response.json();

  //     if (data.success) {
  //       fetchUsers();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleRoleChange = async (
    userId: string,
    newRole: "admin" | "user"
  ) => {
    try {
      await updateUserRole({
        userId,
        role: newRole,
      }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  // const handleDeleteUser = async (userId: string) => {
  //   // const confirmed = window.confirm(
  //   //   "Are you sure you want to delete this user?",
  //   // );

  //   // if (!confirmed) return;

  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/auth/users/${userId}`,
  //       {
  //         method: "DELETE",
  //       },
  //     );

  //     const data = await response.json();

  //     if (data.success) {
  //       fetchUsers(); // Refresh the table
  //       setDeleteSuccess(true);
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId).unwrap();
  
      setDeleteSuccess(true);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const filteredUsers = users?.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = !roleFilter || user.role === roleFilter;
    const matchesStatus = !statusFilter || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // const kpiData = {
  //   totalUsers: 1248,
  //   activeUsers: 1180,
  //   inactiveUsers: 68,
  //   adminUsers: 12,
  // };

  const kpiData = {
    totalUsers: users?.length,
    activeUsers: users?.filter((user) => user.status === "Active").length,
    inactiveUsers: users?.filter((user) => user.status === "Inactive").length,
    adminUsers: users?.filter((user) => user.role === "admin").length,
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/auth/users");

  //     const data = await response.json();

  //     if (data.success) {
  //       const formattedUsers: User[] = data.data.map((user: any) => ({
  //         id: user._id,
  //         name: user.name,
  //         userId: user._id.slice(-6).toUpperCase(), // temporary display ID
  //         email: user.email,
  //         phone: user.phone || "-",
  //         role: user.role,
  //         status: user.isActive ? "Active" : "Inactive",
  //         avatar: user.avatar,
  //       }));

  //       setUsers(formattedUsers);
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch users:", error);
  //   }
  // };

  const confirmDelete = async () => {
    await handleDeleteUser(selectedUserId);

    setDeleteDialogOpen(false);

    setSelectedUserId("");
  };

  const router = useRouter();

  console.log(users);


  return (
    <>
      <Head>
        <title>Samrudh Bhoomi - Users Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageContainer>
        <MainContent>
          <PageHeader>
            <PageTitle variant="h2">Users Management</PageTitle>
            <PageSubtitle variant="body1">
              Manage users, roles, and account status.
            </PageSubtitle>
          </PageHeader>

          <KPIGrid>
            <KPICard>
              <KPILabel variant="overline">Total Users</KPILabel>
              <KPIValue variant="h1">
                {kpiData.totalUsers.toLocaleString()}
              </KPIValue>
            </KPICard>
            <KPICard>
              <KPILabel variant="overline">Active Users</KPILabel>
              <KPIPrimaryValue variant="h1">
                {kpiData.activeUsers.toLocaleString()}
              </KPIPrimaryValue>
            </KPICard>
            <KPICard>
              <KPILabel variant="overline">Inactive Users</KPILabel>
              <KPIErrorValue variant="h1">
                {kpiData.inactiveUsers.toLocaleString()}
              </KPIErrorValue>
            </KPICard>
            <KPICard>
              <KPILabel variant="overline">Admin Users</KPILabel>
              <KPISecondaryValue variant="h1">
                {kpiData.adminUsers.toLocaleString()}
              </KPISecondaryValue>
            </KPICard>
          </KPIGrid>

          <ActionBar>
            <ActionBarLeft>
              <SearchField
                placeholder="Search users..."
                value={searchQuery}
                onChange={handleSearchChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <StyledSelect
                value={roleFilter}
                onChange={handleRoleFilterChange}
                displayEmpty
              >
                <MenuItem value="">All Roles</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </StyledSelect>
              <StyledSelect
                value={statusFilter}
                onChange={handleStatusFilterChange}
                displayEmpty
              >
                <MenuItem value="">All Statuses</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </StyledSelect>
            </ActionBarLeft>
            <ActionBarRight>
              <AddUserButton
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => router.push("/admin/users/add")}
              >
                Add User
              </AddUserButton>
            </ActionBarRight>
          </ActionBar>

          <TableWrapper>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id} hover className="group">
                      <TableCell>
                        <UserCell>
                          <UserAvatar>
                            {user.avatar ? (
                              <img src={user.avatar.url} alt={user.name} />
                            ) : (
                              <Box className="initials">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </Box>
                            )}
                          </UserAvatar>
                          <UserInfo>
                            <UserName variant="body1">{user.name}</UserName>
                            <UserID variant="caption">ID: {user.userId}</UserID>
                          </UserInfo>
                        </UserCell>
                      </TableCell>
                      <TableCell>
                        <ContactInfo>
                          <ContactEmail variant="body2">
                            {user.email}
                          </ContactEmail>
                          <ContactPhone variant="caption">
                            {user.phone}
                          </ContactPhone>
                        </ContactInfo>
                      </TableCell>
                      <TableCell>
                        <StyledSelectCell
                          value={user.role}
                          onChange={(e) =>
                            handleRoleChange(
                              user.id,
                              e.target.value as "admin" | "user",
                            )
                          }
                        >
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="user">User</MenuItem>
                        </StyledSelectCell>
                      </TableCell>
                      <TableCell>
                        <StatusChip
                          label={user.status}
                          statusColor={
                            user.status === "Active" ? "active" : "inactive"
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <ActionButtons>
                          <ActionIconButton
                            size="small"
                            title="View Details"
                            onClick={() => {
                              setSelectedUserId(user.id);
                              setOpenViewDialog(true);
                            }}
                          >
                            <VisibilityIcon />
                          </ActionIconButton>
                          <ActionIconButton
                            size="small"
                            title="Edit User"
                            onClick={() =>
                              router.push(`/admin/users/edit/${user.id}?name=${user.name}`)
                            }
                          >
                            <EditIcon />
                          </ActionIconButton>

                          <ActionIconButton
                            size="small"
                            title="Delete User"
                            onClick={() => {
                              // handleDeleteUser(user.id);
                              setSelectedUserId(user.id);
                              setDeleteDialogOpen(true);
                            }}
                          >
                            <DeleteIcon />
                          </ActionIconButton>
                        </ActionButtons>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </StyledTable>
          </TableWrapper>
          <TablePagination
            component="div"
            count={users.length}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </MainContent>
      </PageContainer>

      {/* <Dialog
  open={openViewDialog}
  onClose={() => setOpenViewDialog(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle
    sx={{
      fontWeight: 700,
      fontSize: 22,
    }}
  >
    User Details
  </DialogTitle>

  <DialogContent dividers>
    {userLoading ? (
      <Box
      sx={{
        display:"flex",
        justifyContent:"center",
        py:5
      }}
      >
        <CircularProgress />
      </Box>
    ) : (
      selectedUser && (
        <>
          <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            mb:3
          }}
          >
            <Avatar
              src={selectedUser.avatar}
              sx={{
                width: 110,
                height: 110,
                mb: 2,
              }}
            />

            <Typography variant="h6">
              {selectedUser.name}
            </Typography>

            <Typography color="text.secondary">
              {selectedUser.email}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box
          sx={{
            display:"grid",
            gridTemplateColumns:"140px 1fr",
            rowGap:2
          }}
          >
            <Typography sx={{fontWeight:600}}>
              Phone
            </Typography>

            <Typography>
              {selectedUser.phone || "-"}
            </Typography>

            <Typography sx={{fontWeight:600}}>
              Role
            </Typography>

            <Chip
              label={selectedUser.role}
              color={
                selectedUser.role === "admin"
                  ? "success"
                  : "default"
              }
              size="small"
            />

            <Typography sx={{fontWeight:600}}>
              Status
            </Typography>

            <Chip
              label={
                selectedUser.isActive
                  ? "Active"
                  : "Inactive"
              }
              color={
                selectedUser.isActive
                  ? "success"
                  : "error"
              }
              size="small"
            />

            <Typography sx={{fontWeight:600}}>
              User ID
            </Typography>

            <Typography>
              {selectedUser._id}
            </Typography>

            <Typography sx={{fontWeight:600}}>
              Joined
            </Typography>

            <Typography>
              {new Date(
                selectedUser.createdAt
              ).toLocaleDateString()}
            </Typography>
          </Box>
        </>
      )
    )}
  </DialogContent>

  <DialogActions>
    <Button
      onClick={() => setOpenViewDialog(false)}
      variant="contained"
    >
      Close
    </Button>
  </DialogActions>
</Dialog> */}



<Dialog
  open={openViewDialog}
  onClose={() => setOpenViewDialog(false)}
  maxWidth="sm"
  fullWidth
  slotProps={{
    paper: {
      sx: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
  }}
>
  {/* Header */}
  <DialogTitle
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: 700,
      fontSize: 22,
      py: 2,
    }}
  >
    User Details

    <IconButton
      onClick={() => setOpenViewDialog(false)}
      sx={{
        bgcolor: "grey.100",
        "&:hover": {
          bgcolor: "grey.200",
        },
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>

  <Divider />

  <DialogContent sx={{ py: 3 }}>
    {userLoading ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 6,
        }}
      >
        <CircularProgress />
      </Box>
    ) : (
      selectedUser && (
        <>
          {/* Profile Card */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              p: 3,
              borderRadius: 3,
              bgcolor: "grey.50",
              border: "1px solid",
              borderColor: "divider",
              mb: 4,
            }}
          >
            <Avatar
              src={selectedUser.avatar.url}
              sx={{
                width: 96,
                height: 96,
                fontSize: 36,
                bgcolor: "primary.main",
              }}
            >
              {!selectedUser.avatar && selectedUser.name?.charAt(0)}
            </Avatar>

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
              >
                {selectedUser.name}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {selectedUser.email}
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  ID
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  {`${selectedUser._id.slice(0, 6)}...${selectedUser._id.slice(-4)}`}
                </Typography>

                <IconButton
                  size="small"
                  onClick={() => navigator.clipboard.writeText(selectedUser._id)}
                  sx={{
                    bgcolor: "white",
                    border: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      bgcolor: "grey.100",
                    },
                  }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Account Information */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Account Information
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {/* Phone Card */}
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                transition:"0.2s",

    "&:hover":{
        boxShadow:3,
        transform:"translateY(-2px)"
    }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <PhoneIcon fontSize="small" color="action" />
                <Typography variant="caption" color="text.secondary">
                  Phone
                </Typography>
              </Box>

              <Typography sx={{ fontWeight: 600 }}>
                {selectedUser.phone || "-"}
              </Typography>
            </Box>

            {/* Role Card */}
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                transition:"0.2s",

    "&:hover":{
        boxShadow:3,
        transform:"translateY(-2px)"
    }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <BadgeIcon fontSize="small" color="action" />
                <Typography variant="caption" color="text.secondary">
                  Role
                </Typography>
              </Box>

              <Chip
                label={selectedUser.role}
                color={selectedUser.role === "admin" ? "primary" : "default"}
                size="small"
              />
            </Box>

            {/* Status Card */}
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                transition:"0.2s",

    "&:hover":{
        boxShadow:3,
        transform:"translateY(-2px)"
    }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <VerifiedUserIcon fontSize="small" color="action" />
                <Typography variant="caption" color="text.secondary">
                  Status
                </Typography>
              </Box>

              <Chip
                label={selectedUser.isActive ? "Active" : "Inactive"}
                color={selectedUser.isActive ? "success" : "error"}
                size="small"
              />
            </Box>
          </Box>

          {/* Member Since */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              transition:"0.2s",

    "&:hover":{
        boxShadow:3,
        transform:"translateY(-2px)"
    }
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <CalendarMonthIcon fontSize="small" color="action" />
              <Typography variant="caption" color="text.secondary">
                Member Since
              </Typography>
            </Box>

            <Typography sx={{ fontWeight: 600 }}>
              {new Date(selectedUser.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Typography>
          </Box>
        </>
      )
    )}
  </DialogContent>

  <Divider />

  {/* Footer Actions */}
  {/* <DialogActions
    sx={{
      justifyContent: "space-between",
      p: 2,
    }}
  >
    <Button
      color="error"
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => {
        setOpenViewDialog(false);
        // handleDeleteUser(selectedUser._id);
      }}
    >
      Delete User
    </Button>

    <Button
      variant="contained"
      startIcon={<EditIcon />}
      onClick={() => {
        setOpenViewDialog(false);
        // router.push(/admin/users/edit/${selectedUser._id});
      }}
    >
      Edit User
    </Button>
  </DialogActions> */}
</Dialog>




      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete User</DialogTitle>

        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>

          <Button color="error" variant="contained" 
          onClick={confirmDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={deleteSuccess}
        autoHideDuration={3000}
        onClose={() => setDeleteSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" onClose={() => setDeleteSuccess(false)}>
          User deleted successfully.
        </Alert>
      </Snackbar>
    </>
  );
};

export default UsersPage;
