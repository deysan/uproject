import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

type SidebarProps = {
  className?: string;
};

export function Sidebar(props: SidebarProps) {
  const { className = '' } = props;

  const [isCollapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>

      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langBtn} />
      </div>
    </div>
  );
}
