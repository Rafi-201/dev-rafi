import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function ProjectTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const skillData = [
    { label: "Software", value: "1", content: "List of Software Skills Here" },
    { label: "Expertise", value: "2", content: "List of Expertise Here" },
    { label: "Language", value: "3", content: "List of Languages Here" },
    { label: "Databases", value: "4", content: "List of Databases Here"},
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
                minHeight: 20, // Consistent tab height
                "& .MuiTab-root": { // Target ALL tabs
                  fontSize: ".8rem",
                  padding: "6px 12px",
                  textTransform: "none", // Prevent uppercase
                  color: "gray", // Inactive color
                  minHeight: 20, // Match TabList height
                  '&:hover': {
                    // color: 'black',
                    backgroundColor: 'lightgray', // Subtle hover effect
                    borderRadius: 1,
                    boxShadow: "none",
                    outline: "none",
                  },
                },
                "& .Mui-selected": { // Target SELECTED tab
                  color: "black",
                  fontWeight: "bold",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 1,

                },
                "& .MuiTab-label": { // Style the label (icon + text)
                  display: 'flex',
                  alignItems: 'center', // Vertically center icon and text
                },
              }}
            >
            {skillData.map((skill) => (
              <Tab
                key={skill.value}
                label={skill.label} 
                value={skill.value} 
                 className="text-sm px-1 py-2"  
              />
            ))}
          </TabList>
        </Box>
        {skillData.map((skill) => (
          <TabPanel key={skill.value} value={skill.value}>
            {skill.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}