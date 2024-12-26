import React, { memo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { VirtualContainer, VirtualInner, Placeholder, PlaceholderText } from './styles';

interface VirtualListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemHeight: number;
}

export const VirtualList = memo(function VirtualList<T>({
  items,
  renderItem,
  itemHeight,
}: VirtualListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan: 5,
  });

  if(items.length === 0) {
    return (<Placeholder ref={parentRef}><PlaceholderText>Add your first Todo</PlaceholderText></Placeholder>)
  }

  return (
    <VirtualContainer ref={parentRef}>
      <VirtualInner style={{ height: `${virtualizer.getTotalSize()}px` }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(items[virtualItem.index])}
          </div>
        ))}
      </VirtualInner>
    </VirtualContainer>
  );
}) as <T>(props: VirtualListProps<T>) => JSX.Element;