import { useEffect, useState } from "react";
import {
  Box,
  Button,
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import {
  ProductSectionContent,
  BlogSectionCard,
} from "@/styles/admin/Cms.styles";

import {
    useDeleteImageMutation,
  useGetCmsByPageQuery,
  useSaveCmsMutation,
  useUploadimageMutation,
} from "@/store/api/apiSlice";

import toast from "react-hot-toast";

import CompanySection from "./CompanySection";
import CompanyLinks from "./CompanyLinks";
import ProductLinks from "./ProductLinks";
import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";
import BottomBar from "./BottomBar";

import {
  BottomBarType,
  FooterLinksType,
  SocialLinksType,
} from "./types";

import { CompanyType } from "./types";

interface UploadedImage {
    url: string;
    publicId: string;
  }

export default function FooterCms() {
  const { data } =
    useGetCmsByPageQuery("footer");

  const [saveCms, { isLoading }] =
    useSaveCmsMutation();

    const [uploadImage, { isLoading: imageUploading }] =
  useUploadimageMutation();

const [deleteImage, { isLoading: imageDeleting }] =
  useDeleteImageMutation();

const imageLoading = imageUploading || imageDeleting;

const uploadImages = async (
    files: File[],
    folder: string
  ): Promise<UploadedImage[]> => {
    const fd = new FormData();
  
    files.forEach((file) => {
      fd.append("files", file);
    });
  
    const res = await uploadImage({
      module: "cms",
      type: folder,
      data: fd,
    }).unwrap();
  
    return res.imageUrls;
  };

  const handleLogoUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
  
    if (!files?.length) return;
  
    try {
      // Upload new logo
      const uploaded = await uploadImages(
        [files[0]],
        "footer"
      );
  
      // Delete previous logo
      if (company.logo.publicId) {
        await deleteImage({
          publicId: company.logo.publicId,
        }).unwrap();
      }
  
      // Update state
      setCompany((prev) => ({
        ...prev,
        logo: uploaded[0],
      }));
  
      toast.success("Logo uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    }
  };

  const [company, setCompany] =
    useState<CompanyType>({
      logo: {
        url: "",
        publicId: "",
      },
      copyright: "",
      description: "",
    });

  const [companyLinks, setCompanyLinks] =
    useState<FooterLinksType>({
      title: "",
      links: [],
    });

  const [productLinks, setProductLinks] =
    useState<FooterLinksType>({
      title: "",
      links: [],
    });

  const [legalLinks, setLegalLinks] =
    useState<FooterLinksType>({
      title: "",
      links: [],
    });

  const [socialLinks, setSocialLinks] =
    useState<SocialLinksType>({
      title: "",
      items: [],
    });

  const [bottomBar, setBottomBar] =
    useState<BottomBarType>({
      leftText: "",
      rightText: "",
    });

  useEffect(() => {
    if (!data?.content) return;

    setCompany(data.content.company);

    setCompanyLinks(
      data.content.companyLinks
    );

    setProductLinks(
      data.content.productLinks
    );

    setLegalLinks(
      data.content.legalLinks
    );

    setSocialLinks(
      data.content.socialLinks
    );

  }, [data]);

  const handleSave = async () => {
    try {
      await saveCms({
        page: "footer",
        content: {
          company,
          companyLinks,
          productLinks,
          legalLinks,
          socialLinks,
          bottomBar,
        },
      }).unwrap();

      toast.success(
        "Footer CMS updated successfully"
      );
    } catch {
      toast.error(
        "Failed to save footer"
      );
    }
  };

  return (
    <BlogSectionCard>
      <ProductSectionContent>

      <CompanySection
  company={company}
  setCompany={setCompany}
  imageLoading={imageLoading}
  imageUploading={imageUploading}
  handleLogoUpload={handleLogoUpload}
/>

        <CompanyLinks
          companyLinks={companyLinks}
          setCompanyLinks={
            setCompanyLinks
          }
        />

        <ProductLinks
          productLinks={productLinks}
          setProductLinks={
            setProductLinks
          }
        />

        <LegalLinks
          legalLinks={legalLinks}
          setLegalLinks={
            setLegalLinks
          }
        />

        <SocialLinks
          socialLinks={socialLinks}
          setSocialLinks={
            setSocialLinks
          }
        />

        <BottomBar
          bottomBar={bottomBar}
          setBottomBar={setBottomBar}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            startIcon={
              <SaveOutlinedIcon />
            }
            onClick={handleSave}
            disabled={isLoading}
            sx={{
              bgcolor: "#2d5a27",
              px: 5,
              py: 1.4,
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#23451f",
              },
            }}
          >
            {isLoading
              ? "Saving..."
              : "Save Footer"}
          </Button>
        </Box>

      </ProductSectionContent>
    </BlogSectionCard>
  );
}