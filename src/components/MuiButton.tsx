import {
  Button,
  ButtonGroup,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import ShareIcon from '@mui/icons-material/Share'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from 'react'

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedValues: string[]
  ) => {
    setFormats(updatedValues)
  }

  return (
    <div className='inline-flex flex-col-reverse items-center justify-center h-16'>
      <p className={`${formats.includes('bold') && 'font-bold'}
        ${formats.includes('italic') && 'italic'}
        ${formats.includes('underline') && 'underline'}
      `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint
        assumenda esse corporis vel error quaerat vitae dicta enim ut!
      </p>
      <Button
        endIcon={<SendIcon />}
        variant='outlined'
        className='border border-gray-500 shadow-none text-lg leading-none px-4 py-5'
      >
        Send
      </Button>
      <IconButton className='text-gray-500'>
        <ShareIcon />
      </IconButton>

      <ToggleButtonGroup
        value={formats}
        onChange={handleFormatChange}
      >
        <ToggleButton value='bold'>
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value='italic'>
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value='underline'>
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default MuiButton
