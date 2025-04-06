import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { TeamMemberCard } from "@/components/molecules/about/teamMemberCard";
import { developers, executives, mentors } from "@/lib/constants/about/trinupTeamMember";


export const FilterTeamMember = () => {
    const [activeFilter, setActiveFilter] = useState<string>("executives");
  
    return (
      <div className="flex flex-col items-center gap-8 w-full">
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            { id: "executives", label: "Equipo Ejecutivo" },
            { id: "developers", label: "Equipo Desarrollador" },
            { id: "mentors", label: "Mentores" },
          ].map((filter) => (
            <motion.div
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                radius="full"
                size="lg"
                variant={activeFilter === filter.id ? "solid" : "bordered"}
                color="success"
                className={`font-bold text-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-trinup-green text-white shadow-lg shadow-trinup-green/30"
                    : "border-trinup-green text-trinup-green hover:bg-trinup-green/10"
                }`}
                onPress={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
  
        <div className="w-full">
          {activeFilter === "executives" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center"
            >
              {executives.map((member, index) => (
                <TeamMemberCard key={`executives-${index}`} member={member} />
              ))}
            </motion.div>
          )}
  
          {activeFilter === "developers" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center"
            >
              {developers.map((member, index) => (
                <TeamMemberCard key={`developers-${index}`} member={member} />
              ))}
            </motion.div>
          )}
  
          {activeFilter === "mentors" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-center"
            >
              {mentors.map((member, index) => (
                <TeamMemberCard key={`mentors-${index}`} member={member} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    );
  };