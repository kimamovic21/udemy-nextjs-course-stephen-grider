'use client'

import { useState } from 'react'
import type { Snippet } from '@prisma/client'
import { editSnippet } from '@/actions'
import Editor from '@monaco-editor/react'

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code)
    
    const handleEditorChange = (value: string = '') => {
        // console.log('value: ', value)
        setCode(value)
    }

    const editSnippetAction = editSnippet.bind(null, snippet.id, code)
  
    return (
    <div className='my-4'>
        <Editor 
            height='40vh'
            theme='vs-dark'
            language='javascript'
            defaultValue={snippet.code}
            options={{
                minimap: { enabled: true },
            }}
            onChange={handleEditorChange}
        />

        <form action={editSnippetAction}>
            <button type='submit' className='mt-2 p-2 border rounded'>
                Save
            </button>
        </form>
    </div>
  )
}
