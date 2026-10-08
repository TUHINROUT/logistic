import { Award, Globe, Users, Building2, Handshake, Warehouse, Route, MapPin, Car, ShoppingCart, HeartPulse, Factory, Zap, Boxes, Leaf, Recycle, FileCheck, Plane, Truck, Ship } from 'lucide-react';

const map = { award: Award, globe: Globe, users: Users, building: Building2, handshake: Handshake, warehouse: Warehouse, route: Route, pin: MapPin, car: Car, cart: ShoppingCart, heart: HeartPulse, factory: Factory, zap: Zap, boxes: Boxes, leaf: Leaf, recycle: Recycle, file: FileCheck, plane: Plane, truck: Truck, ship: Ship };

export default function Icon({ name, size = 22, className = '' }) {
  const C = map[name] || Globe;
  return <C size={size} className={className} />;
}
