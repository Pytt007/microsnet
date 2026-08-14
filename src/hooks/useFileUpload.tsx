import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const uploadFile = async (file: File, bucket: string, filePath: string) => {
    setUploading(true);
    // Mock upload for "start from scratch"
    await new Promise(resolve => setTimeout(resolve, 500));
    setUploading(false);
    return { path: filePath };
  };

  const uploadMultipleFiles = async (files: File[], bucket: string, basePath: string) => {
    setUploading(true);
    const results = await Promise.all(
      files.map(async (file, index) => {
        const filePath = `${basePath}/${Date.now()}_${index}_${file.name}`;
        return uploadFile(file, bucket, filePath);
      })
    );
    setUploading(false);
    return results;
  };

  return {
    uploadFile,
    uploadMultipleFiles,
    uploading
  };
};
