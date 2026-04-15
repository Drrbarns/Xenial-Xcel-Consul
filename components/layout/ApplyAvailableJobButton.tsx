"use client";

import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ApplyAvailableJobButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Button asChild className="rounded-full px-5 shadow-premium">
        <Link href="/apply-available-job">
          <BriefcaseBusiness className="h-4 w-4" />
          APPLY AVAILABLE JOB
        </Link>
      </Button>
    </div>
  );
}
