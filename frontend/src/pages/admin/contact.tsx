// src/pages/admin/contact.tsx (updated)
import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Select,
  MenuItem,
  InputAdornment,
  Chip,
} from "@mui/material";
import {
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Inbox as InboxIcon,
  MarkEmailUnread as MarkEmailUnreadIcon,
  PhoneInTalk as PhoneInTalkIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import {
  PageContainer,
  MainContent,
  ContentWrapper,
  PageHeader,
  PageTitle,
  PageSubtitle,
  KPIGrid,
  KPICard,
  KPILabel,
  KPIValue,
  KPIValuePrimary,
  KPIValueTertiary,
  KPIValueSecondary,
  KPIIconWrapper,
  ActionBar,
  ActionBarLeft,
  SearchField,
  StyledSelect,
  TableWrapper,
  StyledTable,
  InquiryId,
  ContactInfo,
  ContactPhone,
  ContactEmail,
  StyledStatusChip,
  ActionButtons,
  ActionIconButton,
} from "../../styles/admin/Contact.styles";
import Footer from "@/components/admin/Footer";

// StatusChip component
const StatusChip: React.FC<{ status: "New" | "Contacted" | "Closed" }> = ({
  status,
}) => {
  const getStyles = () => {
    switch (status) {
      case "New":
        return {
          backgroundColor: "#dbeafe",
          color: "#1e40af",
          border: "1px solid #bfdbfe",
        };
      case "Contacted":
        return {
          backgroundColor: "#fef3c7",
          color: "#92400e",
          border: "1px solid #fde68a",
        };
      case "Closed":
        return {
          backgroundColor: "#d1fae5",
          color: "#065f46",
          border: "1px solid #a7f3d0",
        };
    }
  };

  return <StyledStatusChip label={status} style={getStyles()} />;
};

// Types
interface Inquiry {
  id: string;
  inquiryId: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  source: string;
  status: "New" | "Contacted" | "Closed";
  date: string;
}

// Mock data
const mockInquiries: Inquiry[] = [
  {
    id: "1",
    inquiryId: "SB-2024-101",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.k@example.com",
    interest: "Organic Fertilizers",
    source: "Product Inquiry",
    status: "New",
    date: "Oct 24, 2024",
  },
  {
    id: "2",
    inquiryId: "SB-2024-098",
    name: "Sunita Patel",
    phone: "+91 87654 32109",
    email: "sunita.p@farm.com",
    interest: "Hybrid Seeds",
    source: "Contact Form",
    status: "Contacted",
    date: "Oct 23, 2024",
  },
  {
    id: "3",
    inquiryId: "SB-2024-085",
    name: "Amit Singh",
    phone: "+91 76543 21098",
    email: "amit.s@gmail.com",
    interest: "Pesticides Bulk",
    source: "General Inquiry",
    status: "Closed",
    date: "Oct 20, 2024",
  },
  {
    id: "4",
    inquiryId: "SB-2024-102",
    name: "Vikram Reddy",
    phone: "+91 99887 76655",
    email: "-",
    interest: "Tractors",
    source: "Product Inquiry",
    status: "New",
    date: "Oct 24, 2024",
  },
];

const ContactPage: NextPage = () => {
  const [inquiries] = useState<Inquiry[]>(mockInquiries);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleStatusFilterChange = (event: any) => {
    setStatusFilter(event.target.value);
    setPage(0);
  };

  const handleProductFilterChange = (event: any) => {
    setProductFilter(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.inquiryId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || inquiry.status === statusFilter;
    const matchesProduct = !productFilter || inquiry.interest === productFilter;
    return matchesSearch && matchesStatus && matchesProduct;
  });

  const paginatedInquiries = filteredInquiries.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const kpiData = {
    total: 156,
    new: 12,
    contacted: 84,
    closed: 60,
  };

  return (
    <>
      <Head>
        <title>Contact Management - Samrudh Bhoomi ERP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageContainer>
        <MainContent>
          <ContentWrapper>
            <PageHeader>
              <PageTitle variant="h1">Contact Management</PageTitle>
              <PageSubtitle variant="body1">
                Manage customer inquiries and contact requests submitted through
                the website.
              </PageSubtitle>
            </PageHeader>

            <KPIGrid>
              <KPICard>
                <Box>
                  <KPILabel variant="overline">Total Inquiries</KPILabel>
                  <KPIValue variant="h2">{kpiData.total}</KPIValue>
                </Box>
                <KPIIconWrapper>
                  <InboxIcon />
                </KPIIconWrapper>
              </KPICard>

              <KPICard>
                <Box>
                  <KPILabel variant="overline">New Inquiries</KPILabel>
                  <KPIValuePrimary variant="h2">{kpiData.new}</KPIValuePrimary>
                </Box>
                <KPIIconWrapper className="primary">
                  <MarkEmailUnreadIcon />
                </KPIIconWrapper>
              </KPICard>

              <KPICard>
                <Box>
                  <KPILabel variant="overline">Contacted</KPILabel>
                  <KPIValueTertiary variant="h2">
                    {kpiData.contacted}
                  </KPIValueTertiary>
                </Box>
                <KPIIconWrapper className="tertiary">
                  <PhoneInTalkIcon />
                </KPIIconWrapper>
              </KPICard>

              <KPICard>
                <Box>
                  <KPILabel variant="overline">Closed</KPILabel>
                  <KPIValueSecondary variant="h2">
                    {kpiData.closed}
                  </KPIValueSecondary>
                </Box>
                <KPIIconWrapper>
                  <CheckCircleIcon />
                </KPIIconWrapper>
              </KPICard>
            </KPIGrid>

            <ActionBar>
              <ActionBarLeft>
                <SearchField
                  placeholder="Search Inquiry..."
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
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
                  displayEmpty
                >
                  <MenuItem value="">All Statuses</MenuItem>
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="Contacted">Contacted</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </StyledSelect>
                <StyledSelect
                  value={productFilter}
                  onChange={handleProductFilterChange}
                  displayEmpty
                >
                  <MenuItem value="">All Products</MenuItem>
                  <MenuItem value="Organic Fertilizers">Fertilizers</MenuItem>
                  <MenuItem value="Hybrid Seeds">Seeds</MenuItem>
                  <MenuItem value="Pesticides Bulk">Pesticides</MenuItem>
                  <MenuItem value="Tractors">Machinery</MenuItem>
                </StyledSelect>
              </ActionBarLeft>
            </ActionBar>

            <TableWrapper>
              <StyledTable>
                <TableHead>
                  <TableRow>
                    <TableCell>Inquiry ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Interest</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedInquiries.map((inquiry, index) => (
                    <TableRow
                      key={inquiry.id}
                      hover
                      className={index % 2 === 1 ? "striped" : ""}
                    >
                      <TableCell>
                        <InquiryId variant="body2">
                          {inquiry.inquiryId}
                        </InquiryId>
                      </TableCell>
                      <TableCell>{inquiry.name}</TableCell>
                      <TableCell>
                        <ContactInfo>
                          <ContactPhone variant="body2">
                            {inquiry.phone}
                          </ContactPhone>
                          <ContactEmail variant="caption">
                            {inquiry.email}
                          </ContactEmail>
                        </ContactInfo>
                      </TableCell>
                      <TableCell>{inquiry.interest}</TableCell>
                      <TableCell>
                        <Typography variant="body2" color="textSecondary">
                          {inquiry.source}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <StatusChip status={inquiry.status} />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="textSecondary">
                          {inquiry.date}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <ActionButtons>
                          <ActionIconButton size="small" title="View Details">
                            <VisibilityIcon />
                          </ActionIconButton>
                          <ActionIconButton size="small" title="Update Status">
                            <EditIcon />
                          </ActionIconButton>
                        </ActionButtons>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredInquiries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableWrapper>
          </ContentWrapper>
        </MainContent>
      </PageContainer>
      <Footer/>
    </>
  );
};

export default ContactPage;
