import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Linkedin, Mail } from "lucide-react";
import { TeamMember } from "@/lib/types/models/teamMember";


const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="max-w-xs dark:bg-trinup-dark dark:border-2 dark:border-trinup-light">
        <CardBody className="overflow-visible p-0">
          <div className="relative w-full h-[150px] flex items-center justify-center">
            <Avatar
              name={
                member.image ? undefined : getInitials(member.name)
              }
              src={member.image}
              className="w-32 h-32 text-2xl text-primary"
            />
          </div>
        </CardBody>
        <CardFooter className="flex-col items-start p-4">
          <h4 className="font-bold text-large text-trinup-green">
            {member.name}
          </h4>
          <p className="text-small text-default-500">{member.jobTitle}</p>
          <p className="text-small mt-2">{member.biography}</p>
          <div className="flex mt-2 gap-2">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as="a"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-trinup-green text-primary" />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as="a"
              href={`mailto:${member.email}`}
            >
              <Mail className="text-trinup-green text-primary" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
