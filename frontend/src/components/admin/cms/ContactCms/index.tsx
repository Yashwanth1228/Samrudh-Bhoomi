import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import toast from "react-hot-toast";

import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";
import OfficeSection from "./OfficeSection";
import FAQSection from "./FAQSection";

import {
  useDeleteImageMutation,
  useGetCmsByPageQuery,
  useSaveCmsMutation,
  useUploadimageMutation,
} from "@/store/api/apiSlice";

import { ContactCmsType } from "./types";

const initialData: ContactCmsType = {
  hero: {
    title: "",
    description: "",
    image: {
      url: "",
      publicId: "",
    },
  },

  contactSection: {
    title: "",
    description: "",
    contactCards: [
      {
        title: "",
        subtitle: "",
        icon: "",
        value: "",
        link: "",
      },
      {
        title: "",
        subtitle: "",
        icon: "",
        value: "",
        link: "",
      },
      {
        title: "",
        subtitle: "",
        icon: "",
        value: "",
        link: "",
      },
    ],
  },

  officeSection: {
    title: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },

    map: {
      embedUrl: "",
      locationUrl: "",
    },
  },

  faqSection: {
    title: "",
    description: "",
    items: [],
  },
};

export default function ContactCms() {
  const [cms, setCms] =
    useState<ContactCmsType>(initialData);

  const { data } =
    useGetCmsByPageQuery("contact");

  const [saveCms, { isLoading }] =
    useSaveCmsMutation();

  const [
    uploadImage,
    {
      isLoading: imageUploading,
    },
  ] = useUploadimageMutation();

  const [
    deleteImage,
    {
      isLoading: imageDeleting,
    },
  ] = useDeleteImageMutation();

  useEffect(() => {
    if (data?.content) {
      setCms(data.content);
    }
  }, [data]);

  interface UploadedImage {
    url: string;
    publicId: string;
  }

  const uploadImages = async (
    files: File[],
    folder: string
  ): Promise<UploadedImage[]> => {
    const fd = new FormData();

    files.forEach((file) =>
      fd.append("files", file)
    );

    const res = await uploadImage({
      module: folder,
      type: "contact",
      data: fd,
    }).unwrap();

    return res.imageUrls;
  };

  const handleSave = async () => {
    try {
      await saveCms({
        page: "contact",
        content: cms,
      }).unwrap();

      toast.success(
        "Contact CMS saved successfully."
      );
    } catch {
      toast.error(
        "Failed to save Contact CMS."
      );
    }
  };

  return (
    <Box>

      <HeroSection
        hero={cms.hero}
        setHero={(hero) =>
          setCms({
            ...cms,
            hero,
          })
        }
        uploadImages={uploadImages}
        deleteImage={deleteImage}
        imageUploading={
          imageUploading
        }
        imageDeleting={
          imageDeleting
        }
      />

      <ContactSection
        contactSection={
          cms.contactSection
        }
        setContactSection={(
          contactSection
        ) =>
          setCms({
            ...cms,
            contactSection,
          })
        }
      />

      <OfficeSection
        officeSection={
          cms.officeSection
        }
        setOfficeSection={(
          officeSection
        ) =>
          setCms({
            ...cms,
            officeSection,
          })
        }
      />

      <FAQSection
        faqSection={cms.faqSection}
        setFaqSection={(faqSection) =>
          setCms({
            ...cms,
            faqSection,
          })
        }
      />

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          startIcon={
            <SaveOutlinedIcon />
          }
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading
            ? "Saving..."
            : "Save Changes"}
        </Button>
      </Box>

    </Box>
  );
}