import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../types/post";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

interface PostState {
  postList: Post[];
}

const [items, setItems] = useState<any>([]);

const itemObj = useEffect(() => {
  async function getItems() {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), orderBy("update", "desc"))
    );
    const itemList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    setItems(itemList);
  }
  getItems();
}, []);

const initialState: PostState = {
  postList: [...items]
};

const postListSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    deletePosts: (state,{payload}) => {
      state.

    }
  }
});
