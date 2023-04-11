import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <ShopLayout title={'Teslo - Home'} pageDescription={'Find the best products here'}>
      <Typography variant='h1' component='h1'>Store</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All Products</Typography>
    </ShopLayout>
  )
}
