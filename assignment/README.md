# REPORT

## Component Structure
1. App.tsx (Root Component)
    -Manages routing using react-router-dom.
    -Defines routes for different pages (Home, Counter, UserDataForm, RichTextEditor, Dashboard).

2. Home.tsx (Landing Page)
    -Serves as the main navigation hub.
    -Uses react-router-dom’s Link for navigation.
    -Utilizes Material UI (@mui/material) and react-icons for a visually appealing layout.

3. Counter.tsx
    -Implements a simple counter using React state (useState).
    -Uses react-spring for animations.

4. UserDataForm.tsx
    -Handles user input fields (Name, Address, Email, Phone).
    -Uses useState for managing form data.
    -Persists data in localStorage via useEffect.
    -Warns users about unsaved changes when they attempt to leave.

5. RichTextEditor.tsx
    -Implements a rich text editor using react-draft-wysiwyg.
    -Uses useState to manage editor content (EditorState).
    -Saves and loads data from localStorage.

6. Dashboard.tsx
    -Contains data visualization using react-chartjs-2 about user insights


## STATE MANAGEMENT CHOICES

1. useState for Local Component State
    -Used in Counter.tsx to track the counter value.
    -Used in UserDataForm.tsx to track form data and detect unsaved changes.
    -Used in RichTextEditor.tsx to manage editor state (EditorState).

2. useEffect for Side Effects
    -UserDataForm.tsx uses useEffect to:
      -Load saved form data from localStorage.
      -Save form data to localStorage when changes occur.
      -Warn users about unsaved changes before leaving the page.
    -RichTextEditor.tsx uses useEffect to initialize editor state from localStorage.

3. localStorage for Persistence
    -UserDataForm.tsx and RichTextEditor.tsx store user input in localStorage, ensuring data persists across page reloads.