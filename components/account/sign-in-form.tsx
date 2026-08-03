"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInForm() {
  return (
    <form className="space-y-6 border border-stone-200 bg-ivory/20 p-8" onSubmit={(e) => e.preventDefault()}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" className="mt-2" placeholder="you@example.com" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" className="mt-2" />
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      <p className="text-center text-sm text-charcoal/60">
        Account functionality is currently in demo mode. A real authentication provider can be connected here.
      </p>
    </form>
  );
}
