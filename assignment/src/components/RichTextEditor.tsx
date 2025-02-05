import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Box, Typography, Paper } from "@mui/material";
import "../App.css"

const RichTextEditor: React.FC = () => {
  // Initialize editor state from localStorage if available
  const storedContent = localStorage.getItem("editorContent");
  const initialState = storedContent
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(storedContent)))
    : EditorState.createEmpty();

  const [editorState, setEditorState] = useState<EditorState>(initialState);

  // Save content to localStorage
  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem("editorContent", JSON.stringify(convertToRaw(contentState)));
    alert("Content saved!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh", // Ensures it takes up full height
        width: "100vw", // Full width
        margin: 0, // Remove margin
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 800,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
          minHeight: "500px", // Minimum height for the editor
        }}
      >
        <Typography variant="h5" gutterBottom>
          Rich Text Editor
        </Typography>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            minHeight: "300px",
            height: "100%", // Full height of the parent Paper
            overflowY: "auto", // Enables scroll if content exceeds the container height
          }}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="editor-wrapper"
            editorClassName="editor-content"
            toolbarClassName="toolbar-class"
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={saveContent}
            sx={{ padding: "10px 20px" }}
          >
            Save Content
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RichTextEditor;
