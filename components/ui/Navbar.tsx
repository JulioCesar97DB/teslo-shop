
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link href='/' display='flex' alignItems='center' color='black'>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link href='/category/men'>
                        <Button>Men</Button>
                    </Link>

                    <Link href='/category/women'>
                        <Button>Women</Button>
                    </Link>

                    <Link href='/category/kid'>
                        <Button>Kid</Button>
                    </Link>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <Link href='/cart'>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>

                <Button>
                    Menu
                </Button>

            </Toolbar>
        </AppBar>
    )
}
