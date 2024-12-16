import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// context
import { MarketsContextProvider } from './context/MarketContext.jsx'
import { AnnouncementContextProvider } from './context/AnnouncementContext.jsx'
import { BlogContextProvider } from './context/BlogContext.jsx'
import { ExpertAdviceContextProvider } from './context/ExpertAdviceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarketsContextProvider>
      <AnnouncementContextProvider>
        <BlogContextProvider>
          <ExpertAdviceContextProvider>
            <App />
          </ExpertAdviceContextProvider>
        </BlogContextProvider>
      </AnnouncementContextProvider>
    </MarketsContextProvider>
  </StrictMode>,
)
