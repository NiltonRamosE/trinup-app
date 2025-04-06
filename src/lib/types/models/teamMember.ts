export interface TeamMember {
  id: string;
  name: string;
  jobTitle: string;
  image?: string;
  biography: string;
  linkedin: string;
  email: string;
  portfolio?: string;
  github?: string;
  subordinates?: string[];
}
