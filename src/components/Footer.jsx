import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="site-footer">
      <p>© {year} Byron C Linder LLC · Chester, PA · All rights reserved.</p>
    </footer>
  )
}

export default Footer
