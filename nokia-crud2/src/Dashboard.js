import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <Card>
        <CardHeader title="Welcome to the CRUD Application" />
        <CardContent>You can Create, Read, Update, Delete, Search and Filter Data which is fetched from JSONPlaceholder online REST API </CardContent>
    </Card>
);