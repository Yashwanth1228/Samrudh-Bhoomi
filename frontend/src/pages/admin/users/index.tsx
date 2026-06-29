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
import { useRouter } from "next/router";

// Types
interface User {
  id: string;
  name: string;
  userId: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  status: "Active" | "Inactive";
  avatar?: string;
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
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRoleFilterChange = (event: any) => {
    setRoleFilter(event.target.value);
  };

  const handleStatusFilterChange = (event: any) => {
    setStatusFilter(event.target.value);
  };

  const handleRoleChange = async (
    userId: string,
    newRole: "admin" | "user",
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/users/${userId}/role`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: newRole,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    // const confirmed = window.confirm(
    //   "Are you sure you want to delete this user?",
    // );

    // if (!confirmed) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/users/${userId}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchUsers(); // Refresh the table
        setDeleteSuccess(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter((user) => {
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
    totalUsers: users.length,
    activeUsers: users.filter((user) => user.status === "Active").length,
    inactiveUsers: users.filter((user) => user.status === "Inactive").length,
    adminUsers: users.filter((user) => user.role === "admin").length,
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/users");

      const data = await response.json();

      if (data.success) {
        const formattedUsers: User[] = data.data.map((user: any) => ({
          id: user._id,
          name: user.name,
          userId: user._id.slice(-6).toUpperCase(), // temporary display ID
          email: user.email,
          phone: user.phone || "-",
          role: user.role,
          status: user.isActive ? "Active" : "Inactive",
          avatar: user.avatar,
        }));

        setUsers(formattedUsers);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

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
                              <img src={user.avatar} alt={user.name} />
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
                            onClick={() =>
                              router.push(`/admin/users/${user.id}`)
                            }
                          >
                            <VisibilityIcon />
                          </ActionIconButton>
                          <ActionIconButton
                            size="small"
                            title="Edit User"
                            onClick={() =>
                              router.push(`/admin/users/edit/${user.id}`)
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

          <Button color="error" variant="contained" onClick={confirmDelete}>
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
