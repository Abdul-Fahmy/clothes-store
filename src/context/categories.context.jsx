// import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";

// export const CategoryContext = createContext({
//   categoriesMap: {},
// });

// export const CategoryProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   useEffect(() => {
//     const getCategoryMap = async () => {
//       const categoryMap = await getCategoriesAndDocument();
//       setCategoriesMap(categoryMap);
//     };
//     getCategoryMap();
//   }, []);
//   const value = { categoriesMap };
//   return (
//     <CategoryContext.Provider value={value}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };
