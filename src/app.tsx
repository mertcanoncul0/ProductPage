import { Header } from "./components/header"
import { ImageGallery } from "./components/gallery"
import { ProductDetail } from "./components/productDetail"
import { Toaster } from "sonner"
import { Lightbox } from "./components/lightbox"

export function App() {
  return (
    <>
      <Toaster position="top-center" richColors expand />
      <Header />
      <main className="main">
        <ImageGallery />
        <Lightbox />
        <ProductDetail />
      </main>
    </>
  )
}
