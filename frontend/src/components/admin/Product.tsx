import {
  HeaderContainer,
  HeaderTitle,
  HeaderSubtitle,
  StyledTable,
} from "@/styles/admin/Product.styles";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
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
import { useGetProductsQuery } from "@/store/api/apiSlice";
import { useEffect } from "react";
import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";
import { useDeleteProductMutation } from "@/store/api/apiSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

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
  const {
    data: products,
    error,
    isLoading: productloading,
    refetch,
    isFetching,
  } = useGetProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  // console.log("data from backend", data);

  // useEffect(()=> {
  //   const fetchallproducts = async () => {
  //     try{
  //       const response = await getProducts{}
  //     }
  //   }

  // },[])

  if (productloading)
    return (
      <LoadingState
        title="Loading products..."
        message="Please wait while we fetch your data."
      />
    );

  if (error)
    return (
      <ErrorState
        title="Failed to Load products"
        message="Unable to fetch products."
        loading={isFetching}
        onRetry={refetch}
      />
    );

  const handleDelete = (id: string) => {
    setSelectedProductId(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedProductId) return;

    try {
      await deleteProduct(selectedProductId).unwrap();

      setDeleteDialogOpen(false);
      setSelectedProductId(null);
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  const filteredProducts = products.filter((product: any) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.name?.toLowerCase().includes(search) ||
      product.category?.toLowerCase().includes(search) ||
      product.status?.toLowerCase().includes(search);

    const matchesCategory =
      categoryFilter === "" || product.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Products Management</HeaderTitle>

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

            <SearchInput
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchWrapper>

          <SelectWrapper>
            <FilterSelect
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Organic Products">Organic Products</option>
              <option value="Seeds">Seeds</option>
              <option value="Pesticides">Pesticides</option>
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

        <AddButton
          startIcon={<AddIcon />}
          onClick={() => router.push("/admin/products/add")}
        >
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
                  {/* <TableCell>Last Updated</TableCell> */}
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredProducts.map((product: any) => (
                  <StyledTableRow key={product.name}>
                    <TableCell>
                      <Avatar
                        src={product.images?.[0]?.url}
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
                          product.status === "In Stock" ? "success" : "error"
                        }
                        size="small"
                      />
                    </TableCell>

                    {/* <TableCell>{product.updated}</TableCell> */}

                    <TableCell align="right">
                      <IconButton>
                        <VisibilityOutlinedIcon />
                      </IconButton>

                      <IconButton
                        onClick={() =>
                          router.push(`/admin/products/edit/${product._id}`)
                        }
                      >
                        <EditOutlinedIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() => handleDelete(product._id)}
                      >
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
          <Typography variant="body2">Showing 1 to 4 of 45 results</Typography>

          <Pagination count={3} color="primary" />
        </Box>
      </ProductTableContainer>

      <Footer />

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Product</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>

          <Button color="error" variant="contained" onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
