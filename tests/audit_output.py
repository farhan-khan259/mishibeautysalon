"""Audit production prerendered HTML after npm run build; no browser required."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,parse_qs
import json
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.h1=0;self.titles=[];self.in_title=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='title':self.in_title=True
  if tag=='a':self.links.append(a.get('href',''))
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
 def handle_data(self,data):
  if self.in_title:self.titles.append(data)
root=Path(__file__).resolve().parents[1]
routes=['/','/about','/services','/bridal','/gallery','/booking','/contact','/reviews']
titles=set();count=0
for route in routes:
 f=root/'.next/server/app'/('index.html' if route=='/' else route[1:]+'.html');assert f.is_file(),f
 content=f.read_text();page=Page();page.feed(content);assert page.h1==1,(route,page.h1)
 title=''.join(page.titles);assert title and title not in titles,(route,title);titles.add(title)
 for href in page.links:
  assert href and href!='#',(route,'empty link')
  if href.startswith('/'):
   parsed=urlparse(href);path=parsed.path
   assert path in routes or (root/'public'/path.lstrip('/')).is_file(),(route,href)
   if path=='/booking' and parsed.query:assert parse_qs(parsed.query).get('service'),href
  count+=1
 assert 'aggregateRating' not in content,(route,'invented rating')
 print('PASS',route,title)
services=(root/'.next/server/app/services.html').read_text()
for name,value in [('Facial',1000),('Bridal Facial',1200),('Bleach',400),('Skin Polish',800),('Face Wax',500),('Plucking',150),('Hand Wax',300),('Party Makeup',1500),('Bridal Makeup',5000),('Walima Makeup',4000)]:
 assert name in services and 'PKR '+format(value,',') in services,(name,value)
print('PASS all 10 services and poster prices present')
booking=(root/'.next/server/app/booking.html').read_text()
for name in ['name','phone','service','date','time','people']:assert f'id="{name}"' in booking,name
print('PASS all required booking fields present')
print(f'PASS {len(routes)} unique titles, one H1 per page, {count} rendered links audited')
