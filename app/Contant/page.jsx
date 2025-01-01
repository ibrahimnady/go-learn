'use client';
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, IconButton, Toolbar, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DescriptionIcon from '@mui/icons-material/Description';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import Link from 'next/link';

const Contant = () => {
    const [expanded, setExpanded] = useState(false); // حالة لتتبع الـ Accordion المفتوح

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false); // إذا تم فتح Accordion، يتم تعيينه كـ expanded، وإلا يتم إغلاقه
    };
    const sections = [
        {
            title: "الفصل الأول",
            status: false,
            content: (
                <Box>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/VideoPage">
                            <IconButton>
                                <VideoLibraryIcon sx={{ marginRight: 2 }} />
                                <span>فيديو الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>

                    <Typography  variant="body1" gutterBottom>
                        <Link href="/">
                            <IconButton >
                                <DescriptionIcon sx={{ marginRight: 2 }} />
                                <span>ملفات الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ExamPage">
                            <IconButton>
                                <QuizIcon sx={{ marginRight: 2 }} />
                                <span>امتحان الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ChatAI">
                            <IconButton>
                                <SchoolIcon sx={{ marginRight: 2 }} />
                                <span>teacher AI</span>
                            </IconButton>
                        </Link>
                    </Typography>
                </Box>
            )
        },
        {
            title: "الفصل الثاني ",
            status: false,
            content: (
                <Box>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/VideoPage">
                            <IconButton>
                                <VideoLibraryIcon sx={{ marginRight: 2 }} />
                                <span>فيديو الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <Link href="/">
                            <IconButton>
                                <DescriptionIcon sx={{ marginRight: 2 }} />
                                <span>ملفات الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ExamPage">
                            <IconButton>
                                <QuizIcon sx={{ marginRight: 2 }} />
                                <span>امتحان الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ChatAI">
                            <IconButton>
                                <SchoolIcon sx={{ marginRight: 2 }} />
                                <span>teacher AI</span>
                            </IconButton>
                        </Link>
                    </Typography>
                </Box>
            )
        },
        {
            title: "الفصل الثالث",
            status: false,
            content: (
                <Box>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/VideoPage">
                            <IconButton>
                                <VideoLibraryIcon sx={{ marginRight: 2 }} />
                                <span>فيديو الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <Link href="/">
                            <IconButton>
                                <DescriptionIcon sx={{ marginRight: 2 }} />
                                <span>ملفات الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ExamPage">
                            <IconButton>
                                <QuizIcon sx={{ marginRight: 2 }} />
                                <span>امتحان الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ChatAI">
                            <IconButton>
                                <SchoolIcon sx={{ marginRight: 2 }} />
                                <span>teacher AI</span>
                            </IconButton>
                        </Link>
                    </Typography>
                </Box>
            )
        },
        {
            title: "الفصل الرابع",
            status: false,
            content: (
                <Box>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/VideoPage">
                            <IconButton>
                                <VideoLibraryIcon sx={{ marginRight: 2 }} />
                                <span>فيديو الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <Link href="/">
                            <IconButton>
                                <DescriptionIcon sx={{ marginRight: 2 }} />
                                <span>ملفات الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ExamPage">
                            <IconButton>
                                <QuizIcon sx={{ marginRight: 2 }} />
                                <span>امتحان الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ChatAI">
                            <IconButton>
                                <SchoolIcon sx={{ marginRight: 2 }} />
                                <span>teacher AI</span>
                            </IconButton>
                        </Link>
                    </Typography>
                </Box>
            )
        },
        {
            title: "الفصل الخامس",
            status: true,
            content: (
                <Box>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/VideoPage">
                            <IconButton>
                                <VideoLibraryIcon sx={{ marginRight: 2 }} />
                                <span>فيديو الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <Link href="/">
                            <IconButton>
                                <DescriptionIcon sx={{ marginRight: 2 }} />
                                <span>ملفات الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ExamPage">
                            <IconButton>
                                <QuizIcon sx={{ marginRight: 2 }} />
                                <span>امتحان الدرس</span>
                            </IconButton>
                        </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <Link href="/ChatAI">
                            <IconButton>
                                <SchoolIcon sx={{ marginRight: 2 }} />
                                <span>teacher AI</span>
                            </IconButton>
                        </Link>
                    </Typography>
                </Box>
            )
        },
    ];

    return (
        <div style={{ width: '100%', marginTop: '65px' }}>
            <head>
                <title>Go Learn | Contant</title>
            </head>
            {sections.map((section, index) => (
                <Accordion key={index} disabled={section.status} expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5">{section.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {section.content}
                    </AccordionDetails>
                </Accordion>

            ))}

        </div>
    );
};

export default Contant;