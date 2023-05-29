"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Download } from "lucide-react";
import React from "react";

export default function DownloadButton() {
  const { toast } = useToast();
  return (
    <Button
      size="sm"
      onClick={() =>
        toast({
          description: "Your download is now start",
          variant: "warning",
        })
      }
    >
      <Download className="mr-2 h-4 w-4" />
      Download
    </Button>
  );
}
