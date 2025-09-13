"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant="ghost"
          className="data-[state=open]:bg-accent data-[state=open]:text-accent-foreground h-12 w-full gap-2 p-2"
        >
          <div className="bg-brand-foreground dark:bg-primary/10 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <activeTeam.logo className="text-primary-foreground dark:text-foreground size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{activeTeam.name}</span>
            <span className="text-muted-foreground truncate text-xs">
              {activeTeam.plan}
            </span>
          </div>
          <ChevronsUpDown className="text-muted-foreground ml-auto size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="start"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-muted-foreground text-xs">
          Teams
        </DropdownMenuLabel>
        {teams.map((team, index) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className="gap-2 p-2"
          >
            <div className="border-border dark:border-border/15 flex size-6 items-center justify-center rounded-md border">
              <team.logo className="size-3.5 shrink-0" />
            </div>
            {team.name}
            <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 p-2">
          <div className="bg-accent flex size-6 items-center justify-center rounded-md">
            <Plus className="size-4" />
          </div>
          <div className="text-muted-foreground font-medium">Add team</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
