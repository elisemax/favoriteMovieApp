'use client'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder: string
  onSearchClick?: () => void
}

export default function SearchInput(props: Props) {
  const { onChange, placeholder, value, onSearchClick } = props
  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
        value={value}
      />
      <IconButton type="button" sx={{ p: '10px' }} onClick={onSearchClick} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
