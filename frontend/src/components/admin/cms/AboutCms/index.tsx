import { useEffect, useState } from "react";
import {
  Box,
  Button,
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import toast from "react-hot-toast";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MissionVisionSection from "./MissionVisionSection";
import JourneySection from "./JourneySection";
import EcosystemSection from "./EcosystemSection";

import {
  AboutCmsType,
} from "./types";

import {
  useDeleteImageMutation,
  useGetCmsByPageQuery,
  useSaveCmsMutation,
  useUploadimageMutation,
} from "@/store/api/apiSlice";

const initialData: AboutCmsType = {
  hero: {
    title: "",
    description: "",
    image: {
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
    cards: [
      {
        title: "",
        description: "",
        icon: "",
      },
      {
        title: "",
        description: "",
        icon: "",
      },
    ],
  },

  missionVision: {
    mission: {
      title: "",
      description: "",
    },
    vision: {
      title: "",
      description: "",
    },
  },

  journey: {
    title: "",
    subtitle: "",
    timeline: [],
  },

  ecosystem: {
    title: "",
    images: [
      {
        url: "",
        publicId: "",
      },
      {
        url: "",
        publicId: "",
      },
      {
        url: "",
        publicId: "",
      },
    ],
    galleryButton: {
      text: "",
      link: "",
    },
  },
};

export default function AboutCms() {
  const [cms, setCms] =
    useState(initialData);

  const { data } =
    useGetCmsByPageQuery("about");

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

  const uploadImages = async (
    files: File[],
    folder: string
  ) => {
    const fd = new FormData();

    files.forEach((file) =>
      fd.append("files", file)
    );

    const res =
      await uploadImage({
        module: folder,
        type: "about",
        data: fd,
      }).unwrap();

    return res.imageUrls;
  };

  const handleSave =
    async () => {
      try {
        await saveCms({
          page: "about",
          content: cms,
        }).unwrap();

        toast.success(
          "About CMS saved successfully"
        );
      } catch {
        toast.error(
          "Failed to save CMS"
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

      <AboutSection
        about={cms.about}
        setAbout={(about) =>
          setCms({
            ...cms,
            about,
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

      <MissionVisionSection
        missionVision={
          cms.missionVision
        }
        setMissionVision={(
          missionVision
        ) =>
          setCms({
            ...cms,
            missionVision,
          })
        }
      />

      <JourneySection
        journey={cms.journey}
        setJourney={(
          journey
        ) =>
          setCms({
            ...cms,
            journey,
          })
        }
      />

      <EcosystemSection
        ecosystem={cms.ecosystem}
        setEcosystem={(
          ecosystem
        ) =>
          setCms({
            ...cms,
            ecosystem,
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