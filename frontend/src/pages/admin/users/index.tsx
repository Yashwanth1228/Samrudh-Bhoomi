// src/pages/admin/users.tsx
import React, { useState } from "react";
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
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Notifications as NotificationsIcon,
  HelpOutlined as HelpOutlineIcon,
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
  role: "Admin" | "User";
  status: "Active" | "Inactive";
  avatar?: string;
}

// Mock data
const mockUsers: User[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    userId: "USR-1042",
    email: "rajesh.k@samrudh.in",
    phone: "+91 98765 43210",
    role: "Admin",
    status: "Active",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHMGK3WJWTC5Lt5wXMnZT1n_QQiz4y3biHDTFIl8c88NZt6nOXJhe7pjglQn5A7pC3QrYiueqt2J0fs1dq14sL_MhaaJgBNgaa_r6QDzE9gL5Kh4pJWxeSmIoAPhdYhkqdY5KLaJO4xK5wVvDu0gYYk1IzUDJsvPnN4ilkVe82yVad8YNFfBz1Wion-gQGSvjsH7sHOpYM6qpAeiQP5O00-QasWQ_j0NmBenNKI6BpF_qHEJ6cGzgucEXeBBnCHaZCLg3xZeQI_i3t",
  },
  {
    id: "2",
    name: "Anita Sharma",
    userId: "USR-1088",
    email: "anita.s@samrudh.in",
    phone: "+91 91234 56789",
    role: "User",
    status: "Active",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpFK1nysZu1FtjY4jxRqwZjIfsD15IGGg8HlvtskMzpMkH4veskw4bgdFMGDTy8-Udip4emgitWiHYh3OWibkWoxOiY4EZH5Y6sLR4D48SOfQ3SZoy5fc1xDzR0OXnm0gSJgrnHobnCTrttH4P7tL8zeEhgVqp7IgzVOA5VA2TKOHzgjfvzJjfDI0kumgtFIv2f0p0MG2Mp6Ie28fVwElwTJeB0-qigC0dR07YhoROPQ2xXkJURVlJ8YSyB03k5Mpcmv7mWab1QE6g",
  },
  {
    id: "3",
    name: "Vikram Singh",
    userId: "USR-1102",
    email: "vikram.singh@samrudh.in",
    phone: "+91 99887 76655",
    role: "User",
    status: "Inactive",
    avatar: "",
  },
];

const UsersPage: NextPage = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRoleFilterChange = (event: SelectChangeEvent) => {
    setRoleFilter(event.target.value);
  };

  const handleStatusFilterChange = (event: SelectChangeEvent) => {
    setStatusFilter(event.target.value);
  };

  const handleRoleChange = (userId: string, newRole: "Admin" | "User") => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user,
      ),
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = !roleFilter || user.role === roleFilter;
    const matchesStatus = !statusFilter || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const kpiData = {
    totalUsers: 1248,
    activeUsers: 1180,
    inactiveUsers: 68,
    adminUsers: 12,
  };

  const router = useRouter();

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
                onChange={() => handleRoleFilterChange}
                displayEmpty
              >
                <MenuItem value="">All Roles</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </StyledSelect>
              <StyledSelect
                value={statusFilter}
                onChange={() => handleStatusFilterChange}
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
                {filteredUsers.map((user) => (
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
                        onChange={() => (e: SelectChangeEvent) =>
                          handleRoleChange(
                            user.id,
                            e.target.value as "Admin" | "User",
                          )
                        }
                      >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="User">User</MenuItem>
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
                        <ActionIconButton size="small" title="View Details">
                          <VisibilityIcon />
                        </ActionIconButton>
                        <ActionIconButton size="small" title="Edit User">
                          <EditIcon />
                        </ActionIconButton>
                      </ActionButtons>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableWrapper>
        </MainContent>
      </PageContainer>
    </>
  );
};

export default UsersPage;
