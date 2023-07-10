import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type PageLoaderProps = {
  className?: string;
};

export function PageLoader({ className = '' }: PageLoaderProps) {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
}
