import React from 'react';
import styles from './AdvItem.module.css';

interface IconProps {
  className?: string;
  strokeWidth?: number | string;
  [key: string]: any;
}

interface AdvItemProps {
  text: string;
  text1: string;
  icon?: React.ReactElement<IconProps>;
  iconColor?: string;
}

export const AdvItem: React.FC<AdvItemProps> = ({ text, text1, icon, iconColor = 'text-blue-500' }) => {
  return (
    <div className={`${styles.advItem} group hover:bg-gray-50/50 transition-colors duration-300 p-4 rounded-lg`}>
      {icon && (
        <div className={`${styles.iconContainer} ${iconColor} bg-opacity-10 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300`}>
          {React.cloneElement(icon, {
            className: `w-6 h-6 ${iconColor}`,
            strokeWidth: 1.5,
            ...icon.props
          })}
        </div>
      )}
      <div className={styles.content}>
        <h3 className={`${styles.title} text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors`}>
          {text}
        </h3>
        <p className={`${styles.description} mt-1 text-gray-600 group-hover:text-gray-700 transition-colors`}>
          {text1}
        </p>
      </div>
    </div>
  );
};

export default AdvItem;
