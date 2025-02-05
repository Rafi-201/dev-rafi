import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SkillCard } from './skill-card'; // Assuming this path is correct
import { skillData } from './data/skillData';


export default function SkillTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="Skill Tabs"
            sx={{
              minHeight: 20,
              "& .MuiTab-root": {
                fontSize: ".8rem",
                padding: "6px 12px",
                textTransform: "none",
                color: "gray",
                minHeight: 20,
                '&:hover': {
                  backgroundColor: 'lightgray',
                  borderRadius: 1,
                  boxShadow: "none",
                  outline: "none",
                },
              },
              "& .Mui-selected": {
                color: "black",
                fontWeight: "bold",
                boxShadow: "none",
                outline: "none",
                borderRadius: 1,
              },
              "& .MuiTab-label": {
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            {skillData.map((category) => ( // Map over categories
              <Tab
                key={category.value}
                label={
                  <div className="flex items-center gap-2"> {/* Icon and Label */}
                    <category.icon className="w-5 h-5" /> {/* Render the icon */}
                    <span>{category.label}</span>
                  </div>
                }
                value={category.value}
                className="text-sm px-1 py-2"
              />
            ))}
          </TabList>
        </Box>
        {skillData.map((category) => ( // Map over categories for TabPanel
          <TabPanel key={category.value} value={category.value}>
            <div className="flex flex-wrap gap-4"> {/* Wrap SkillCards */}
              {category.skills.map((skill) => ( // Map over skills in each category
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}