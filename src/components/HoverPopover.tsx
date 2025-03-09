'use client';
import React, { useRef, useState } from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Submenu } from '@/app/data';
import Link from 'next/link';

interface HoverPopoverProps {
  title: string;
  submenu?: Submenu[];
}

const HoverPopover: React.FC<HoverPopoverProps> = ({title, submenu}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Si le timer de femeture est lance on l'arrete donc ne trigger pas la fermeture
  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsOpen(true);
  };

  // Lance le timer de fermeture pour eviter de fermer le popover trop rapidement
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };
  
  return (
    <div className="flex items-center justify-center p-8">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>{title}</span>
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-600" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-64 p-4 bg-white mt-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {submenu?.map((item) => (
            <Link key={item.title}
              href={item.link}
              className="flex py-2 text-sm text-slate-600"
            >
              {item.title}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HoverPopover;