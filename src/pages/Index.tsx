import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      title: 'Монтаж систем отопления',
      description: 'Профессиональная установка котлов, радиаторов и тёплых полов',
      icon: 'Flame',
      features: ['Проектирование', 'Установка оборудования', 'Пусконаладка']
    },
    {
      title: 'Водоснабжение и канализация',
      description: 'Комплексные решения для частных домов и коммерческих объектов',
      icon: 'Droplets',
      features: ['Разводка труб', 'Монтаж сантехники', 'Система очистки']
    },
    {
      title: 'Вентиляция и кондиционирование',
      description: 'Современные системы климат-контроля для любых помещений',
      icon: 'Wind',
      features: ['Приточная вентиляция', 'Кондиционеры', 'Рекуперация']
    },
    {
      title: 'Техническое обслуживание',
      description: 'Регулярное сервисное обслуживание инженерных систем',
      icon: 'Settings',
      features: ['Диагностика', 'Профилактика', 'Ремонт']
    }
  ];

  const guarantees = [
    {
      title: 'Гарантия на работы',
      period: '3 года',
      description: 'Полная гарантия на все виды монтажных и пусконаладочных работ'
    },
    {
      title: 'Гарантия на оборудование',
      period: 'До 5 лет',
      description: 'Официальная гарантия производителя на установленное оборудование'
    },
    {
      title: 'Бесплатное обслуживание',
      period: '1 год',
      description: 'Бесплатные выезды специалистов для проверки системы в течение года'
    },
    {
      title: 'Аварийная служба 24/7',
      period: 'Круглосуточно',
      description: 'Экстренный выезд бригады при возникновении аварийных ситуаций'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={28} className="text-primary" />
            <span className="text-xl font-bold">ТехноСервис</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#guarantees" className="text-sm font-medium hover:text-primary transition-colors">Гарантии</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <Badge className="mb-4" variant="outline">Профессиональные инженерные решения</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Надёжные системы для вашего комфорта
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Проектирование, монтаж и обслуживание инженерных систем любой сложности. 
              Работаем с 2010 года, более 500 успешных проектов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для создания комфортного микроклимата в вашем доме или офисе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Экспертиза и надёжность с 2010 года
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на комплексном обслуживании инженерных систем. 
                Наша команда состоит из сертифицированных специалистов с многолетним опытом работы.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных проектов</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Специалистов в штате</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/3138249f-bbcf-4ec6-9517-7baf8cc93985/files/436d26fa-ad27-4e25-ba1a-96741cba8dc8.jpg" 
                  alt="Команда профессионалов" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши гарантии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы несём полную ответственность за качество выполненных работ и установленного оборудования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center hover-scale border-2">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{guarantee.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary mb-2">{guarantee.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-8 bg-card rounded-2xl border-2 border-primary/20">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <Icon name="FileCheck" size={64} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Официальный договор с полным пакетом документов</h3>
                <p className="text-muted-foreground">
                  После завершения работ вы получаете акты выполненных работ, 
                  гарантийные талоны на оборудование и техническую документацию
                </p>
              </div>
              <Button size="lg" variant="default">
                <Icon name="Download" size={20} className="mr-2" />
                Образец договора
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите вашу задачу"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Адрес офиса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15, офис 201</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@technoservice.ru</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Аварийная служба 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+7 (495) 999-88-77</p>
                  <p className="text-sm text-muted-foreground">Круглосуточная поддержка</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={24} />
                <span className="text-lg font-bold">ТехноСервис</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональное обслуживание инженерных систем с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Отопление</li>
                <li>Водоснабжение</li>
                <li>Вентиляция</li>
                <li>Обслуживание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Наши проекты</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@technoservice.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-80">
            <p>© 2024 ТехноСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;