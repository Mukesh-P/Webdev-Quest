import { useState } from 'react';
import './Accordion.css';

export const Accordion = ({ items, allowMultiple = false, ...rest }) => {
  const [openIds, setOpenIds] = useState(new Set());

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }

      return next;
    });
  };

  return (
    <div className="accordion" {...rest}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              {item.title}
              <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
              <div className="accordion-body">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
