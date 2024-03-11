import React, { Suspense, lazy, useEffect, useState } from 'react';
import c from './Users.module.css';
import { NavLink } from 'react-router-dom';
import UnfoundAva from '../../img/avaUnfound.jpg';
import Loader from '../Loader/Loader';
import {
  axiosFollowDelete,
  axiosFollowPost,
  axiosGetUsers,
} from '../../API/API';
import { batch } from 'react-redux';
import { UserType } from '../../types/globalInterface';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { ButtonFolow } from './Button';
import styled from '@emotion/styled';

const Users = lazy(() => import('./Users'));

const UsersContainer = () => {
  const [users, setUsers] = useState<UserType[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [PagesCount, setPagesCount] = useState(10);
  const [followingID, setFollowingID] = useState<number[]>([]);

  useEffect(() => {
    axiosGetUsers(currentPage > 1 ? currentPage : 1, PagesCount).then(
      (data) => {
        setUsers(data.items);
        setTotalPages(Math.ceil(data.totalCount / PagesCount));
      },
    );
  }, [currentPage, PagesCount]);

  const followPost = (id: number) => {
    followingInProgress(id);
    axiosFollowPost(id).then((data) => {
      if (data.resultCode === 0) {
        batch(() => {
          setUsers((users1) => {
            if (!users1) {
              return;
            }
            return users1.map(
              (user: {
                id: number;
                name: string;
                status: string | null;
                photos: { small: string | null; large: string | null };
                followed: boolean;
              }) => {
                if (user.id === id) {
                  return { ...user, followed: true };
                }
                return user;
              },
            );
          });
          setFollowingID((prevFollowingID) =>
            prevFollowingID.filter((item) => item !== id),
          );
        });
      }
    });
  };
  const followDelete = (id: number) => {
    followingInProgress(id);
    axiosFollowDelete(id).then((data) => {
      if (data.resultCode === 0) {
        batch(() => {
          setUsers((users1) => {
            if (!users1) {
              return;
            }
            return users1.map(
              (user: {
                id: number;
                name: string;
                status: string | null;
                photos: { small: string | null; large: string | null };
                followed: boolean;
              }) => {
                if (user.id === id) {
                  return { ...user, followed: false };
                }
                return user;
              },
            );
          });
          setFollowingID((prevFollowingID) =>
            prevFollowingID.filter((item) => item !== id),
          );
        });
      }
    });
  };

  const followingInProgress = (id: number) => {
    const data = [...followingID, id];
    setFollowingID(data);
  };

  // const everyUser = users
  //   ? users.map(({ name, id, status, followed, photos: { small } }) => {
  //       return (
  //         <div className={c.GridKurwa} key={id}>
  //           <div className={c.Extension}>
  //             <NavLink to={`/users/${id}`}>
  //               <img
  //                 src={small ? small : UnfoundAva}
  //                 className={c.MiniAvatar}
  //               />
  //             </NavLink>
  //             <Button
  //               followingId={followingID}
  //               id={id}
  //               title={followed ? 'Unfollow' : 'Follow'}
  //               onClick={() => (followed ? followDelete(id) : followPost(id))}
  //             />
  //           </div>
  //           <div className={c.MainInfo}>
  //             <NavLink to={`/users/${id}`} className={c.item}>
  //               <div className={c.User}>
  //                 <div className={c.Name}>{name}</div>
  //                 <div className={c.Country}>{status}</div>
  //                 <div className={c.City}>kurwa city</div>
  //                 <div className={c.Status}>kurwa</div>
  //               </div>
  //             </NavLink>
  //           </div>
  //         </div>
  //       );
  //     })
  //   : null;

  const everyUser = users
    ? users.map(({ name, id, status, followed, photos: { small } }) => {
        return (
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 240 }}>
              <NavLink to={`/users/${id}`} className={c.item}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={small ? small : UnfoundAva}
                  title={small ? 'user photo' : 'no photo'}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="p">
                    {name}
                  </Typography>
                  <Typography variant="body2">{status}</Typography>
                </CardContent>
              </NavLink>
              <CardActions>
                <ButtonFolow
                  followingId={followingID}
                  id={id}
                  title={followed ? 'Unfollow' : 'Follow'}
                  onClick={() => (followed ? followDelete(id) : followPost(id))}
                />
              </CardActions>
            </Card>
          </Grid>
        );
      })
    : null;

  if (!users) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <Users
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        everyUser={everyUser}
        totalPages={totalPages}
        setPagesCount={setPagesCount}
      />
    </Suspense>
  );
};

export default UsersContainer;
