interface ITeamMember {
  name: string;
  cfunction: string;
  icon: string;
  linkedIn: string;
}

interface ITeam {
  main: ITeamMember[];
  advisors: ITeamMember[];
  consultants: ITeamMember[];
}

export type { ITeamMember, ITeam };
