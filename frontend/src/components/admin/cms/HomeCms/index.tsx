import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import toast from "react-hot-toast";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import StatisticsSection from "./StatisticsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FaqSection from "./FaqSection";

import {
  HomeCmsData,
  UploadImage,
} from "./types";

import {
  useDeleteImageMutation,
  useGetCmsByPageQuery,
  useSaveCmsMutation,
  useUploadimageMutation,
} from "@/store/api/apiSlice";

export default function HomeCms() {
  const { data } = useGetCmsByPageQuery("home");

  const [saveCms, { isLoading }] = useSaveCmsMutation();

  const [
    uploadImage,
    { isLoading: imageUploading },
  ] = useUploadimageMutation();

  const [deleteImage, { isLoading: imageDeleting }] =
  useDeleteImageMutation();

  const [cmsData, setCmsData] = useState<HomeCmsData>({
    hero: {
      title: "",
      subtitle: "",

      video: {
        url: "",
      },

      backgroundImage: {
        url: "",
        publicId: "",
      },
    },

    about: {
      title: "",
      description: "",

      image: {
        url: "",
        publicId: "",
      },
    },

    statistics: {
      items: [],
    },

    whyChooseUs: {
      title: "",
      subtitle: "",

      cards: [],
    },

    faq: {
      title: "",
      subtitle: "",

      questions: [],
    },
  });

  useEffect(() => {
    if (data?.content) {
      setCmsData({
        hero: data.content.hero,
        about: data.content.about,
        statistics: data.content.statistics,
        whyChooseUs: data.content.whyChooseUs,
        faq: data.content.faq,
      });
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
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    const res = await uploadImage({
      module: folder,
      type: "home",
      data: formData,
    }).unwrap();

    return res.imageUrls;
  };

  const handleSave = async () => {
    try {
      const res = await saveCms({
        page: "home",
        content: cmsData,
      }).unwrap();

      if (res.success) {
        toast.success("Home CMS saved successfully.");
      }
    } catch (err) {
      toast.error("Failed to save Home CMS.");
    }
  };

  return (
    <Box>

      {/* Hero */}
      <HeroSection
  hero={cmsData.hero}
  setHero={(hero) =>
    setCmsData((prev) => ({
      ...prev,
      hero,
    }))
  }
  uploadImages={uploadImages}
  deleteImage={(data) => deleteImage(data).unwrap()}
  imageUploading={imageUploading}
  imageDeleting={imageDeleting}
/>

      {/* About + Statistics */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
          mt: 3,
        }}
      >

<AboutSection
  about={cmsData.about}
  setAbout={(about) =>
    setCmsData((prev) => ({
      ...prev,
      about,
    }))
  }
  uploadImages={uploadImages}
  deleteImage={(data) => deleteImage(data).unwrap()}
  imageUploading={imageUploading}
  imageDeleting={imageDeleting}
/>

        <StatisticsSection
          statistics={cmsData.statistics}
          setStatistics={(statistics) =>
            setCmsData((prev) => ({
              ...prev,
              statistics,
            }))
          }
        />
      </Box>

      {/* Why Choose Us */}
      <WhyChooseUsSection
        whyChooseUs={cmsData.whyChooseUs}
        setWhyChooseUs={(whyChooseUs) =>
          setCmsData((prev) => ({
            ...prev,
            whyChooseUs,
          }))
        }
      />

      {/* FAQ */}
      <FaqSection
        faq={cmsData.faq}
        setFaq={(faq) =>
          setCmsData((prev) => ({
            ...prev,
            faq,
          }))
        }
      />

      {/* Save Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 5,
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          startIcon={<SaveOutlinedIcon />}
          onClick={handleSave}
          disabled={isLoading}
          sx={{
            bgcolor: "#2d5a27",
            px: 5,
            py: 1.5,
            fontWeight: 700,
            borderRadius: 2,
            minWidth: 220,
            "&:hover": {
              bgcolor: "#23451f",
            },
          }}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </Box>

    </Box>
  );
}