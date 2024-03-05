import { DropdownMenuItem } from '@/components/ui/dropdown-menu.js';
import CheckIcon from '@/components/ui/icons/check';

interface CardMenuItemProps {
    cardId: string;
    label: string;
    selected?: boolean;
}

const CardMenuItem = ({ cardId, label, selected = false }: CardMenuItemProps) => (
    <DropdownMenuItem key={`${cardId}-${label}`} className="flex items-center justify-between">
        <span>{label}</span>
        {selected && <CheckIcon className="h-4 w-4" />}
    </DropdownMenuItem>
);

export default CardMenuItem;
