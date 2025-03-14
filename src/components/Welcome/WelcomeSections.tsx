// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';

import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextContent from '@cloudscape-design/components/text-content';

export function Overview() {
    return (
        <SpaceBetween size={'s'}>
            <Header variant="h2">Overview</Header>
            <Container>
                <SpaceBetween size={'s'}>
                    <TextContent>
                        <Box variant="p">
                        Clinical Notes Application, powered by Mansa Infotech, enables healthcare software vendors to build applications that generate clinical notes from patient-clinician interactions. It streamlines documentation by leveraging advanced analytics for accurate and efficient note creation.
                        </Box>
                    </TextContent>
                </SpaceBetween>
            </Container>
        </SpaceBetween>
    );
}

export function Highlights() {
    return (
        <SpaceBetween size={'s'}>
            <Header variant="h2">Highlights</Header>
            <Container>
                <ul>
                    <li>Submit an audio file for generating clinical notes.</li>
                    <li>View clinical notes.</li>
                    <li>Record or generate audio.</li>
                </ul>
            </Container>
        </SpaceBetween>
    );
}

export function Details() {
    return (
        <SpaceBetween size={'s'}>
            <Header variant="h2">
                <span>Details</span>
            </Header>
            <Container>
                <SpaceBetween size={'s'}>
                    <Box>
                        <b>View Mansa clinical results</b>, including:
                        <ul>
                            <li>Summarized clinical notes</li>
                            <li>Rich consultation transcripts</li>
                            <li>Transcript segmentation</li>
                            <li>Evidence mapping</li>
                            <li>Structured medical terms</li>
                        </ul>
                    </Box>
                    
                </SpaceBetween>
            </Container>
        </SpaceBetween>
    );
}

export function Footer() {
    return (
        <Container>
            <Box textAlign="center" color="text-body-secondary" fontSize="body-s">
                <p>Copyright © Manasa Infotech. All Rights Reserved.</p>
                <p>
                Permission is granted, free of charge, to any individual obtaining a copy of this software and related documentation 
                (the &quot;Software&quot;), to use, copy, modify, merge, distribute, sublicense, and sell copies of the Software, subject to the following conditions.
                </p>
                <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT
                </p>
            </Box>
        </Container>
    );
}
