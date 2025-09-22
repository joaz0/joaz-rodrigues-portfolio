import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from '../../shared/constants/app.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>{{ companyName }}</h3>
            <p>{{ tagline }}</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn" class="social-link">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="GitHub" class="social-link">
                <i class="fab fa-github" aria-hidden="true"></i>
              </a>
              <a href="#" aria-label="Instagram" class="social-link">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#services">Desenvolvimento Web</a></li>
                <li><a href="#services">Apps Mobile</a></li>
                <li><a href="#services">Sistemas Desktop</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#process">Nosso Processo</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} {{ companyName }}. Todos os direitos reservados.</p>
          <p class="footer-credits">Desenvolvido com ❤️ usando Angular</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, var(--bg-dark) 0%, #1a1d3a 100%);
      color: #f8f9fa;
      padding: clamp(40px, 8vh, 80px) 0 clamp(20px, 4vh, 40px);
      margin-top: clamp(60px, 10vh, 120px);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--primary), transparent);
      }
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(32px, 6vw, 60px);
      margin-bottom: clamp(32px, 6vh, 48px);
      
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      
      @media (min-width: 1024px) {
        grid-template-columns: 1.5fr 1fr;
      }
    }

    .footer-info {
      h3 {
        font-size: clamp(1.5rem, 4vw, 2rem);
        font-weight: 700;
        margin-bottom: clamp(12px, 2vh, 16px);
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      p {
        color: #cccccc;
        margin-bottom: clamp(24px, 4vh, 32px);
        font-size: clamp(0.875rem, 2vw, 1rem);
        line-height: 1.6;
      }
    }

    .social-links {
      display: flex;
      gap: clamp(12px, 2vw, 16px);
      
      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(40px, 6vw, 48px);
        height: clamp(40px, 6vw, 48px);
        background: rgba(105, 89, 248, 0.1);
        border: 1px solid rgba(105, 89, 248, 0.2);
        border-radius: 50%;
        color: var(--secondary);
        text-decoration: none;
        transition: var(--transition);
        
        &:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(105, 89, 248, 0.3);
        }
      }
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: clamp(24px, 4vw, 32px);
    }

    .link-group {
      h4 {
        font-size: clamp(1rem, 2.5vw, 1.125rem);
        font-weight: 600;
        margin-bottom: clamp(16px, 3vh, 20px);
        color: var(--secondary);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          margin-bottom: clamp(8px, 1.5vh, 12px);
          
          a {
            color: #cccccc;
            text-decoration: none;
            font-size: clamp(0.875rem, 2vw, 0.9375rem);
            transition: var(--transition);
            
            &:hover {
              color: var(--primary);
              padding-left: 4px;
            }
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: clamp(20px, 4vh, 32px);
      text-align: center;
      
      p {
        color: #999;
        font-size: clamp(0.75rem, 1.8vw, 0.875rem);
        margin: clamp(4px, 1vh, 8px) 0;
        
        &.footer-credits {
          color: #666;
        }
      }
    }

    :host-context(.light) .footer {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      color: var(--text);
      
      .footer-info p {
        color: var(--text-light);
      }
      
      .link-group ul li a {
        color: var(--text-light);
      }
      
      .footer-bottom {
        border-top-color: rgba(0, 0, 0, 0.1);
        
        p {
          color: var(--text-light);
          
          &.footer-credits {
            color: #999;
          }
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly companyName = APP_CONFIG.COMPANY_NAME;
  protected readonly tagline = APP_CONFIG.TAGLINE;
  protected readonly currentYear = new Date().getFullYear();
}