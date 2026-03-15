import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import { useApp } from '../../store/AppContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const { t } = useApp();

  return (
    <div className="prod-card">
      <div className="prod-img-wrap" onClick={() => navigate(`/products/${product.slug}`)}>
        <img className="prod-img" src={product.image} alt={product.name} />
      </div>
      <div className="prod-info">
        <div className="prod-tag">{t('pr.tag')}</div>
        <div className="prod-name" onClick={() => navigate(`/products/${product.slug}`)}>{product.name}</div>
        <div className="prod-tagline">{product.tagline}</div>
        <div className="prod-actions">
          <button className="btn-outline" style={{ padding: '.6rem .5rem', fontSize: '.72rem', width: '100%' }}
            onClick={() => navigate(`/products/${product.slug}`)}>
            {t('pr.det')}
          </button>
          <WhatsAppButton message={product.whatsappMessage}
            label={t('pr.wa')}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
