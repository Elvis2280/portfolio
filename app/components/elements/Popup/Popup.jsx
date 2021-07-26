import { useState } from 'react';
import style from './popup.module.css';

const Popup = ({ data }) => {
  const [lastElementOn, setLastElementOn] = useState(null);

  const showCard = (e) => {
    data.forEach(({ title }) => {
      const currentElement = document.querySelector(`#${title}`);

      if (lastElementOn && lastElementOn.classList.contains('invisible')) {
        lastElementOn.classList.add('invisible');
      }

      if (e.currentTarget.attributes.id.nodeValue === title) {
        currentElement.firstChild.classList.toggle('invisible');
        currentElement.firstChild.classList.toggle(style.showPopup);

        setLastElementOn(currentElement.firstChild);
      } else {
        currentElement.firstChild.classList.add(`invisible`);
      }
    });
  };

  const techElements = data.map((element, index) => {
    return (
      <div
        id={element.title}
        key={index}
        className="py-1"
        icon={element.title}
        onClick={(e) => showCard(e)}
        onMouseEnter={(e) => showCard(e)}
        onMouseLeave={(e) => showCard(e)}
      >
        <div
          className={`absolute expandHover w-full bottom-2/4 left-0 transform translate-x-0 p-2 rounded max-w-sm border border-secondaryLight bg-primary invisible`}
        >
          <p className="md:text-lg">
            <span className="text-secondaryLight">{element.title}</span>,
            {element.text}
          </p>
        </div>
        <span className="text-3xl text-neutral duration-300 hover:text-secondaryLight  cursor-pointer">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-current mr-2 pt-1 md:w-10 md:h-10 lg:w-12 lg:h-12"
          >
            <title>{element.title}</title>
            <path d={element.iconPath} />
          </svg>
        </span>
      </div>
    );
  });

  return <div className="flex">{techElements}</div>;
};

export default Popup;
