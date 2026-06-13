import {
  HeaderContainer,
  HeaderTitle,
  HeaderSubtitle,
  StyledTable,
} from "@/styles/admin/Product.styles";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

import {
  ToolbarContainer,
  FilterSection,
  SearchWrapper,
  SearchInput,
  SelectWrapper,
  FilterSelect,
  AddButton,
} from "@/styles/admin/Product.styles";

import {
  Avatar,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  Box,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import {
  StyledTableRow,
  ProductTableContainer,
} from "@/styles/admin/Product.styles";
import { useRouter } from "next/router";
import Footer from "./Footer";

const products = [
  {
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtN6wUq66Ek_v6ONog7ZcXP7FKRFZdzWkqwvuK1jmuXQYsA078cdzHyOUV_dnejSjIcuWl1RVD0JfevGEAtZhWej-XjI6r3p71UHdOCV9tAlHdvuhqJNfnYDg5yvV8syfIO0L4X5Puso8Lzva2GCKUevYroPzLSI9-2x4Mi_35sHV5YmlyFaTqsi7X2cm-M7cG4n9t6GjaGUcjCASqyMF-IeAFnCQPEuOHMQFCP4bzGbWoADQNsiimrNfuX",
    name: "Bio-Rich Organic Granules",
    category: "Fertilizers",
    price: "$45.00",
    status: "In Stock",
    updated: "Oct 24, 2023",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLt2mDd019pOiTY71nvHOayuYoUb8KAsa_St9y9QePfj8CLvT74mt5RRthlLaNqV8ESInDhOevk_1hw4GXhr5HGg-xo7JVm36eeOxK666VtoRaprNJa1jx6ShPHtQhWmMjlhJltgmAWuG4SdSzHz9sGlRLaE-pugib5xRvxcKmy3e_0SYjcYLwhIuaG0kTNa0oaqMYNx63AxMzSFWMnJsmo2kNAsTwbbc3zfSL2t3eQgVpQ-t4gjyKR5Ou1N",
    name: "Eco-Guard Liquid Shield",
    category: "Pesticides",
    price: "$28.50",
    status: "Low Stock",
    updated: "Oct 22, 2023",
  },
];


export default function ProductHeader() {
  const router = useRouter();
  return (
    <>

<HeaderContainer>
      <HeaderTitle>
        Products Management
      </HeaderTitle>

      <HeaderSubtitle>
        Manage products, categories, pricing, brochures and product
        information.
      </HeaderSubtitle>
    </HeaderContainer>

<ToolbarContainer>
<FilterSection>
  <SearchWrapper>
    <SearchIcon
      sx={{
        position: "absolute",
        left: 12,
        top: "50%",
        transform: "translateY(-50%)",
        color: "#6b7280",
        fontSize: 20,
      }}
    />

    <SearchInput placeholder="Search products..." />
  </SearchWrapper>

  <SelectWrapper>
    <FilterSelect defaultValue="">
      <option value="">All Categories</option>
      <option value="fertilizers">Fertilizers</option>
      <option value="organic">Organic Products</option>
      <option value="seeds">Seeds</option>
      <option value="pesticides">Pesticides</option>
      <option value="equipment">Equipment</option>
    </FilterSelect>

    <KeyboardArrowDownIcon
      sx={{
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        color: "#6b7280",
        pointerEvents: "none",
      }}
    />
  </SelectWrapper>

  <SelectWrapper>
    <FilterSelect defaultValue="">
      <option value="">Status</option>
      <option value="instock">In Stock</option>
      <option value="lowstock">Low Stock</option>
      <option value="outofstock">Out of Stock</option>
    </FilterSelect>

    <KeyboardArrowDownIcon
      sx={{
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        color: "#6b7280",
        pointerEvents: "none",
      }}
    />
  </SelectWrapper>
</FilterSection>

<AddButton startIcon={<AddIcon />}onClick={() => router.push("/admin/products/add")}>
  Add Product
</AddButton>
</ToolbarContainer>

<ProductTableContainer>
      <TableContainer component={Paper}>
        <Table>
          <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.name}>
                <TableCell>
                  <Avatar
                    src={product.image}
                    variant="rounded"
                    sx={{ width: 50, height: 50 }}
                  />
                </TableCell>

                <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {product.name}
                </Typography>
                </TableCell>

                <TableCell>{product.category}</TableCell>

                <TableCell>{product.price}</TableCell>

                <TableCell>
                  <Chip
                    label={product.status}
                    color={
                      product.status === "In Stock"
                        ? "success"
                        : "error"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell>{product.updated}</TableCell>

                <TableCell align="right">
                  <IconButton>
                    <VisibilityOutlinedIcon />
                  </IconButton>

                  <IconButton>
                    <EditOutlinedIcon />
                  </IconButton>

                  <IconButton color="error">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>


          </StyledTable>
        </Table>
      </TableContainer>

      <Box
  sx={{
    mt: 3,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
        <Typography variant="body2">
          Showing 1 to 4 of 45 results
        </Typography>

        <Pagination count={3} color="primary" />
      </Box>
    </ProductTableContainer>

    <Footer/>
    
    </>
  );
}