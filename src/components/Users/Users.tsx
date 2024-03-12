import React from 'react';
import c from './Users.module.css';
import { Box, CssBaseline, Grid, Pagination, Stack } from '@mui/material';

const Users = ({
  setCurrentPage,
  everyUser,
  totalPages,
}: {
  setCurrentPage: (data: number) => void;
  everyUser: JSX.Element[] | null;
  totalPages: number;
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <div className={c.Container}>
      <Stack spacing={2} alignItems="center" paddingTop={'10px'}>
        <Pagination
          count={totalPages}
          onChange={handleChange}
          color="secondary"
          showLastButton
          showFirstButton
          sx={{ '& .MuiPaginationItem-root': { color: 'white' } }}
        />
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} width={'100%'} margin={'0 auto'}>
          {everyUser}
        </Grid>
      </Box>
      <Stack
        spacing={2}
        alignItems="center"
        paddingBottom={'10px'}
        paddingTop={'10px'}
      >
        <Pagination
          count={totalPages}
          onChange={handleChange}
          showLastButton
          showFirstButton
          sx={{ '& .MuiPaginationItem-root': { color: 'white' } }}
        />
      </Stack>
    </div>
  );
};

export default Users;
