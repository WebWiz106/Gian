"use client";
import { Menu } from "@/types/menu";
import { useAppSelector, useAppDispatch } from "../../app/redux/hook/hook";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Career",
    path: "/career",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
// function getDashboardPath() {
//   const AuthState = useAppSelector((state) => state.auth); // Use useSelector inside the function

//   if (AuthState && AuthState.isClient) {
//     return "/clientdashboard";
//   } else if (AuthState && AuthState.isAdmin) {
//     return "/admindashboard";
//   } else {
//     return "";
//   }
// }
export default menuData;
