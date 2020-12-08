/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const NewsItem = (props) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.logo}
        source={{
          uri: props.imageUrl,
        }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 25,
        }}>
        {props.title}!
      </Text>
      <Text
        style={{
          textAlign: 'center',
        }}>
        {props.description}!
      </Text>
    </View>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <ScrollView>
            <NewsItem
              type="sports"
              title="Derbide nefesler kesildi"
              description="FB-Beşiktaş derbisi nefes kesti"
              imageUrl="https://blog.playo.co/wp-content/uploads/2017/03/football-shots-you-need-to-know.jpg"
            />
            <NewsItem
              type="sports"
              title="Barcelona'nın Arjantinli yıldızı Lionel Messi ve Juventus'un Portekizli yıldızı Ronaldo çıtayı arşa çıkardı!"
              description="Söylentilere göre Lionel Messi 15 milyon dolar değerinde özel bir jet satın aldı. Cristiano Ronaldo'nun ise garajından akıllara zarar bir servet var."
              imageUrl="https://iatkv.tmgrup.com.tr/a492e3/0/0/0/0/0/0?u=https%3a%2f%2fitkv.tmgrup.com.tr%2falbum%2f2020%2f10%2f09%2fbarcelonanin-arjantinli-super-yildizi-lionel-messi-zenginligi-arsa-cikardi-tam-12-milyon-sterlin-1602245835322.jpg&mw=800&l=1"
            />
            <NewsItem
              type="sports"
              title="Galatasaray'dan dev operasyon! 4 ayrılık 2 transfer."
              description="Yeni nesil Aslanlar sahada hakimiyeti ele alırken Galatasaray'da gözler ocak ayındaki devre arası transfer dönemine çevrildi. Fatih Terim'in raporuna göre hareket eden ve kadroda bazı değişiklikler yaşamaya hazırlanan sarı-kırmızılılarda 4 isimle yolların ayrılmasına karar verildi. Öte yandan Cimbom 2 yıldıza imza attıracak.."
              imageUrl="https://iaftm.tmgrup.com.tr/d7eadb/0/0/0/0/0/0?u=https://iftm.tmgrup.com.tr/album/2020/12/08/galatasaraydan-dev-operasyon-4-ayrilik-2-transfer-1607375333215.jpg&mw=752&mh=700&l=1"
            />
            <NewsItem
              type="economy"
              title="Türkiye’den Çin’e giden ilk ihracat treni sınır kenti Kars’ta"
              description="ürkiye’den Çin’e gidene kadar 2 kıta, 2 deniz ve 5 ülke geçerek yaklaşık 8 bin 693 km yol kat edecek olan ilk ihracat treni sınır kentti Kars’a ulaştı."
              imageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIWFhUXGBcWGBYVGRUYFxgXFxcYGhoYGBcZHSggGBolHRoXITEhJSkrLi4uGB8zODMuNygtLisBCgoKDg0OGhAQGy8lICUyLS8vLS0rKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tNf/AABEIAKYBMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEoQAAIBAwIDBQQGBQgJBAMAAAECEQADIRIxBAVBBhMiUWEycYGRB0KhsdHwFCNSYsFTcnOCkrLS4RUkMzRDorPC8RZjg6MXRFT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAxEQACAgEDAgMGBQUBAAAAAAAAAQIRAxIhMQRRE0GRIjJhodHwcXKBscEFI0JikjP/2gAMAwEAAhEDEQA/APcaKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKSaNXv+RoBaK51j8g0ax6/I0B1RSBvzmloAopJooBaKKSaAWikmiaAWikooBaKSiaAWiuZomgOqK5mlmgFopJomgFormaJoDqiuZpQaAWiikoBaKSloAooooAooooAopCaJoAJpKKQmgFmkmkmkJoBGUb0gSPrH7/voQzn3x86WaAQl/3T8x9ufupLd0mREEGD1HwPWkYkmB8T/AetdqIwKA6GKWa5miaA6miabe4BkkDpkgZ8s1nO1HPdFphbaCYUGYJkidPwnIzUpWA7Q8/e1c7u2y4AnAJBPQz6R86z/Ec8ZmHeXJbYdI90VRX+KgTNVz80U2ymkTgBpH53mryjpKRlqNkvMWdomSepn7asf0N9M626baPuOaxnCcUQJG+R8D6/xq4Xta4XS1qSBGoGCfeMionCXKWxMZIs+M4W4i6gxPo2nPp4dj+fOovBc7uW8q0eYOQfeKicX2ma6pAthD8+m/vqrS9V8WNv3iuSaXB6Fy7tVaeFu/q2890Px+r8cetX6uCJBkHYjavIRdq97Hce44lbYY6HDSvSQpaY6HFWyYKVorDLbpnoU0TXNFYGx1NJNJNFALNE0lJNAdTXa03XaVAO65NdVyRQCilrkV1QBRRRQBRRXJNANcVc0ifzsa6tPKg+YB+yqztDe02wf3v+1qlcuebNs+dtD81FASia5mkmigFrjf3feaQtmPz/AOa6FAKDTZaSQPifLHT1pCZwD7z5f5/n39qIECgOlEYFE0k1X855h3Co8Ey+mB1/VuRJ6CQM0A9x3NLNlS124qAGCWMZIBgDdjBGBO9Y7m30gEyvDW4H8pdH2rbGf7RHurK9qOYd9fNwurGB7MEL0IHwC+prP8ZxLo3i9nz+zoc56+oreMIpJyMpSk21EseY85uNcFy5ca44yCx2/mgYQfzQKjW+OuXboe4xJ6TsBBwKqL/Ezmabs8SZBGTIge/pTI0pKuBFPTvyby3yt20+JPEVG5xrBIJxtiPeYppOU+x4lBcCMNudMLhcnxTjYAnpVXZ7QXFgBnUrpwBto2Bx4hk469aQdoLg6nYg/q1MzAMyviMACT0qrXUN3qj/AD+xP9rin9/qTUaJHkaWqheaqNw2/wCzTh5zbG+sf1TXcpwrk5HGfYtAae4LhWuBipHhiZnqfT4n4VS/6Ytn9r+waWzz3RqClgGwfCTOCPLyY/Os88m4Pw2r+JfFH2vbTo0VrldxiQpUxuZbcbjI3GPTNP8AZe8LfF2WuHQssJfwjNtgMn1IHxqgtdqGBkOfX9XGc5gLvkyeuPKuOJ5kboUmdKzBCx5DPXYVhF5rayONP1NZLHzBOz3IXBJUHIAYj0aQD8dLfKuqwP0a8T4rql+lsIpP9IYUHyEnHrW9mspx0yo1jLUrFopJomqFhaSkmipB1TiU0DTqVAO6KKKA5NANc3DXAagHpommtVGqgHCa4JrktXJNAUva+5FlSdtcfNLlTeRtPDWD/wC1b/uCqnt0f9WX+lX+69WPZ0/6rw/9Fb/uCgLKkJ6daQtSJtQHQEUhacD4ny/zrkkkwPif4D8fyOwI2oARQBA2FN8VxKW0a5cYKiglmYwAB1Jpya8z+lTtTetluDt20Nq7ZOu4SS2WZCqgEaSpUZIMzQGmb6QOWzA4nUZA8Nu6RJ28WmPjWc7cc2firTpbJRFIIKxL4YSx6AzgDyzvXnt/iLT8Opt2u7AvIgAOqRBJZyd3OfdgdK2HCJ+ovDOLqpJ8l7wfhVnGlZCdsxfLmIKSdmQR/XWrHtFZ7y0WBJYGesnbUPXcH4VWcvPiWM+O3/fTJ8qvS2G6b/cPwq81SX4FIvdmPtPj8+dX/ILSgqYM+Z3/AMqouFtOwkKzSYkBjk9Mbk+Vbzsv2YuHSbv6sEr4RGuNp8l+Pyq8dKSbKy1N0iguZkAwfOuSjAe2f+X8K9QtdhOE87s/z1/w11/6C4Tzu/21/wANdD6jC3e5ksOVKjyk6/2j8l/CpPD8DdgksYPoPwP8K9Jv9hOGCMU70sFJUFlIkAwI05zVHy5T3Y0HMksuQWMnBM4xH2+ted/UOujiSeNep09L088k9MnRjv0J1nU25MYXzoBYH2j8l/Ct3y7ktvir7q2oIFDEpA8W3UEfCrQ/R/wv7d7+1b/wVt0nVY8uJSlszPJiyKTSpnl5Rpktj0Amtj2J5KvFEhmKqpJOmJP+zxJwN/I1ensBw37d7+1b/wAFTeR8sXgu9Fos36trg1wTqAWB4QJHhHzrbLkxuNRKxhNO5GI+j/HHcMPS5/0Wr2SvFPo4uTx3De65/wBFq9qrHN736L9jXH7vqLSUTSTWRcWiaSaJoDoU7bpin7dSByiikNQBm6aqLvF6eKC+MjutgGInXvA+U1aXTVU/+9r/AEJ/6lATf01dWmHn+jux/a0x9tO98PP5yPvomigE79f2l+YoF5TswPuIoe4AJJ/PkB1PpTVxdQOseGPYwdQ8m9PT5+VAUXbm4Dw2MxdTPQ4fY9asOzbE8HY/okz/AFRWb7c8eV08GtpiAtu4LojQIZkFuP2oE+6tF2TYHg+HI/kk+wRQFsK4Bnbbz/D8fyEUz7vv/wAq7oBRULm/N7HCp3l+6ttdhMyx8lUZY+gBqm7XdsrPBW3iLl5cd2DhWMRrI23BjeD03rwXnXOb/FXTev3C7n+yonCouyqPIe8yZNWjHU6Qex6lzb6X7YJHD8Mz/v3WCD3hFkke8g15vzPmrcTee64UPcbvCqyBJxgEkge8neqVmpnlr+IksFwfExgT69fgN6tKOmiqdl/wD/6s58rqH5Mv416JZaODugna/cBPuZv4k15ty8qOFfXqEsrARnSGQSeignEn1IDRFau5b4m5ZRbZdA159bqEKKSXOCx1FoiIwBqnMATka0oiF2ROxHEHvzwYIX9IPdsSCSFtKznTkeKQIJ+VXlzkdwpZdr9pe8QP4gV0jQGJMtByyL72BqDyPlq8NxtgKzMNcy8atXccSHJYCTqOkmZ2HkI23KkDASMJas2hvg92ruQfIhrY96VnqZoomI5dzHheGVbVniGvXe+Pe4uKpEFPCG8GGCZBJILdDjfcA6kW4/dwfhWG7QdkrVi4L9pn1XL3iDFSo1lnJGJGR8prVHmdm1lmlhnSsE+EyfQbdSKrVukW4Rr7RqQprz9PpJszixdj1KD7iaeX6SbPWxd+afjWy6bL2MvHx9zeCvGeeu1niL1votxwNx4SZUY9CK1o+kiz/IXfmn41i+03MU4niWvW1ZQ4WQ2mZVQs4JxAFdODpbbWWOxzZ80Wk4Pc9C+jhSeGNw7vcaP5qAKB/aD1rK847PdtbHDcNbs91cJQGSCkElixIz5mrA/SRY/kb3w7vP8AzVlPpp6npjsawzwUVbNoxql4xeI7wNZuW0GnSS6F23mVGoD51R//AJH4frZvfK3/AI6n8j7QW+MV7ltXUK+gh9IM6VaRpY4z9lZSwzirkjSOWE3SZW8ztrw/E8uS1CmXsKSAT4kS0GOPEVDFs7xU63za4nFGLhNoXlstbYu5KN36tfZ3aFIuWHOlABpUzMjS9xfL1vXbTszDu3QALAnW4J8YGtSAn1WG+ZpOJ4FG4y9biEKcKkDGHTj1P981nZdo2FJUTlfEG5aRmjXEPGwuKSrj4OGHwqVUkC0UlFAKKft1HFSLVAO03caluGortUAGNVlz/e0/oW/v1YzVVxF1RxaEkAdy0yQPrUBbTXDXOgEn7B7z0++mQ7OcSqftH2m/mg+yPU53gbNTgsqPqj5A/Mnc+tAdLbzJyfPy9w6Us591cG2v7K/IUd0o+qPkKAy/bbltrHGZ71VWyCCICFmY4OJk71b9mQBwtlZwFjJEnJ+yoPbSzPDGMDUuwEnf8xTvK7tq1waPdaFgzk5MkQoG5xXOpvx3G9tN/NmuleFfnf8ABem6o+sPM5GB51i+0/bLTNuwdzp1iZJ8kAyT7s+6s52n7SNxMpbXTbthn0yQPApMuQPEwAMKNjvEaqkcg4JNKX8szBTqaJAOYUbKPQekyc1td8FardmP7Q8Iw4U3i0A3I0DSSTqYMXYSNWoGQNjMk9McblXPMuPccOvD6h3aqzhYHtNxN6TO9UiX1H1QT+8ZX+x16bkj0rpxJQuzObujtELDVso3ZsLPl5sfQSa5tsFDd2PFAhmidWpfZGy595xuMimr19nMsScYnoPID6o9BimwZUjrH/cNqjI7ISo9FXlCdybbQ50cZqbIk27vAlSVneGPqZrZXGjhreABKMAP6MnYe8fOsZYuhbV9gRGvmcHGx4rl4x860dvjkezbRWlglsmMgfqUET1OR8qy3ZfZGR7Y8QRetlSymG2JBwxG49CfmapE5heAxeuDrh3G/wAfKpva66zXLRK6SUJIJBg6iSKotRj4V19PS2OfLfJKfj7jGGuXDvhnY50nzNXHK7x0gT0rNI0H5/cau+WXBHwrTZzKf4hZbJroXhmTB6dKYsNmpIECunNjeSFRdGGHIsc7lG/gzq3ewCfKujeqI5pvWa6FxuYUTDd9akK4NVeqhLxqLGksbhrjhua3rKlbV50BYk6GKydKCTBpkXZFRGb7z9y1nOq3NIXex6R9GXMbt284uXXfx2Y1szRFvimxJx7IrZ3f9+u+n6B9rcUP415r9GfMrNi8zXr1u0uu2ZuOqjFnigdz5uo/rDzr0IcUlzib122wdNPLGDKQQVa9fgz5QwPuzXkZ/wD0dfex6OP3EX/LxpuX7fTUt1R5LdXI95uJdb+sKnTUHhM3r58u7X5Jqj/n+2ptZlxZomkooBRUi1UcVIs0AXjVd+mJrZNQBWJkge0JEZ8ql3Hqk4S636XfUr4Stshht4VGD5E6j5+zUAtVuA5BBHoRVZfRTxlskA/qjvByHxVnFVd//e0gA/qmHoPF1oC2JjekJpruhIOJE5gYkbDy/wDFd0As0sedJtkn4/nas12k7W2+HGlZZyVGOhYkCf2QYbO/haAYoBfpA4pV4Vl3OpPDMY1Qc9N6xPAcNd4kAu5FpSQBqkxOyx7C+7xHJxuWe1F293xW4NS9yrlwW0o5vqugLMHA9oiTJ2BirXsqhPDrE5Z/n3r1Xw1q1PkvrdUuDPWeU2l4u2hIuAveDIVGlfAbiIAfJWX0wNq2C+xOABJJOAAPM9BVHeVLNy5xAcXGDllWPAC9m3bjUMvGmfD+1E0zzLjLrrc3Ki0vhgaRI1E48IxIJE4WehrRtbGZVds+CSzwK2t7iMDqHsxcvXpgnJ8QY9Nx7h51P5+Vek/SAC3D+pFo9MzdvH8a817pvL1+78D8q2jbj+pS1YATA/OwoDaVMbwR9oP8Ke4Gzq7wn6tp2+IUD+NMrZYjAMQWJ2ELE5PlI+dYze5okWbexdY5JN7JjJF7hSfvNa7svf8AAGH8nbPxCgEe/wANZG7w6I8X30gasD2tWm0Ntypg7D6u+ae5ZzsALZspEKwNxupVHaQvqQdz12o8nYhQ7lp2ttG46vPhACn3szE/ZA+NZrhmQSTb1kBSF1RuASZjbP3Uq8W125ZNxi2pyPQAsgwNgcnYdae4KzN+4PJfuK1lOVI3wQ15EhocytD/APUHl/tCPh7NPJz1Rtw0f/Kw/wC2uuM5TqZTmBmPPb5V2OWT5CPFkSMGTI8qx8SFXfzZ6HgZ99lt/rH6EviOJa0HZuGXw4YC/JHiVSIA6FgDURO0QaY4bbf9Y3+GrLi1vXFui5btL3p8TqLkyrq2A9wquogEwMxJk5FFf4e7YwCIM+EqT16Ceh/JqVkhLaL+bM140d5pJflj9B5+0qyQeF23/WN+FOLzkNkcIT7rjf4apbiyTMz/ADTPqdvfT9vi7qgKFxtlDP31dp+V+r+pnDK79rj8sfoWFznqjfhY/wDkb/DXI58v/wDN/wDaf8NQL9wuPEpn0Rh+NS+X8Et3UAIKiTK7D/x91Q2oq236v6llKcpVGv8AmP0H+H5yGZUFhpYhQO8OSfhT3FXgqh2sHTIXw3FbLAxsZzpbPoa74Tk727i3UCnunmGBglSwMwQRBH2ipHEG49ru3sW7Y7zXKd6SdKsunxu0KNbGBAE4AkzXxoPiT9WWWLO5VpX46Y/QqP8ASNk/8F/mPxrZfR7x1y9xLcPaLW0vIBe1aPHas2ioQGCVYJgER5k1Q8JYtpbuI3DJcuPGi8xuTaEydCqdJJncxEdQYrWfRhw+nj7fqt3/AKbU1xtJP5mjwZFCbkkqT/xXb8D1ns9eL99cP17ltvnwnCk/bNW1UnZA/wCrg+eg/KzaX/tq7roPJCiikZoE0B0KkWTUMvT9i6PsmgITcWAxViBAmSQAcAnfykfOodi8vfXjI/4URmfAdo3qSgi4xjpv7guI9P4+lReHgcRfMZItbDPsH/KgJyvqzOn0kT7ienw8t6q7t4fpiKGE90cY8yY+Qn4VOukxOR6QTnpI6/nFVd3g0/T7dzqLJHxBZQfeFLDyz7qh35Eou7c9fn+QKTiuKS0pdzAGag8451a4ZCzEEgEhQRJ+J2Hqfea8/wCP49+NPD3Dei27B4TBhYdQsjMkZ8h571PJHHJecdzy7fuqizbtRjbUZ2MHbAwT0bAyGEDiODtLxNrEsNtWQAVumQTnUSGkmTt60zzPmCLfLlowG9Sq6FMefiYD41XcdzU3GZlAQgBQ318FoEyI9phAj2uuKjZB7kjtYw/WZGVtLAOQe91ZHTAbeqr/AEhcHDi2raVEYEZLXZJPnuRB+U5qLdH6t5mC1kzH8+SAI642G1SuB4YNbRy4AJMrmSFfpiBJG/SNjU3uPIThVm3d9pvBsoLMW0rAC5JJOkRAmdhVweX3CHLh7LOhtkqbbDROlichpZNEQAAS07KaiXOZC2yd0q20AYQo8RkQCXmYEHEeXlUbjOdsUI/dM+siPjgCpSsjgi9reNW5YQW1klwuqdwhuEQAYAktnqIrB3kgDWwTwgieu+w3MbY86uuN4gG0hQaV/VsqkyQCMZ6nO9Zzj5PcyAOmABiViYGTk5Oa6LrD9/Ayr+59/EtOXqk30UNIsXZJ6gopXrg/DrVHc5ldACKxUAEDTAMMZPi3yfWrTguZW7b33fdrboqicmEUZ2GAfl7qoXuSZjy+yuRcnQ2Iw3zmfz8aseFYrbDggN4gN5yYJ2jYsM/tfJuxy666d5pK2/2jgHMCJ3yfvpv9GHiyWCjcxAk7xv5mpIJS3iWsaQSFaFnBMXA5kCYy3masuWse/ueCCRJk5GRIyJ3O3oPKodq8yC2hWCXR/ehONunX1geVTXvBOKvEnGlRt1ISs8m8WdHTNLJFt1uXtq2GOTAALMf3VBJPvgGnE7RW7Tq/DWcLGb2zMM6tKmYydz5e6qMc0HiKZ8LCGBghgVI+RO1M8BY1oGW/aDyQbbtoMACG1HBkn7KywwS947v6hnc2lB7fA3vHcbwvFcM3EWh3XE2g1y5ZQwWVQAxEABhGkg49mDWB4jizeIHiIXf2jjyJUHScdTWnu864Tg+EPD27qXuIuD9bdtgsoBM6A5GceEAerEAmDlOH7RNbJ0pJ8QB1GIfBlCInrO+Kl41rtIyx534OlyXPD3/bcicXfWQApEgHHSfPzq/vdlwvDJxXesUNtWchHGi42dBBGU0kHvAYJBgbVnTxFsmXBB9DtvGY8+nWtBxXbb/U/wBFFsT3du3qaTlQqs4M4BCLAjEZmtorZHJmknNtFJwt3QzS0FehO/pHXpVtwTMFu8QP9l4UYggkT4QGA9mZO8Vm7zNrOoiQemQfl51M4PighdSfA0ax4o8BkYBg58wf41XJBSRp0+ecGkntfn6Git80LEwzTIBOI+sRkYjDbYrXcis8L3J4riGJS07JkagXG6hAM5iM++Bt5q3G29cgwAI2Pn5VsOxvabhe7vcHxWLV461cgwrwAwMZQ+FXDbAg+lYQwRTuju6nq3KFRkrvy7FwO13DXtdu5aFm23ssVNwj1YIPCczgNEfGmezvEvY4+2bCi/J0pBbSVuqRqJRWaFVpPhOxnTVaOTcDbBe/x6XLYOEsQXcT9aCSs9QB/WFWvYPmyXub2imAxu6VjZRYuBV8hCgY9K1nFWmu5y9PlkozjJ7NP1PXORcvPD2EtFgzKDLAQCSZMCSQBsJPSu+N5rZtEC5cAJMRufkMxXXHK5WEYg49kZ3/AGjIA+HxrE9pW4iwhIuaQXhVCBUYsDhrneFnMzvOc4xW7PPZqG7S8NEpcFwyRpQrqEbkhysAeZqOedB1uECCuUIMq8fV1DGreQB1wTmvKb4YzNxS8ZVFChZJ8l07gQRvBznL/Dd5GlmYwDgkwIOknSZ2LAz51nrCdm65j2mAHh9qRM/UEeXVsHH3b0vI+MJJLuXJIhwzH62AQcDBOBHuFZOxcBWNE4BBnY7gERnJIzv92g5DzSQEuMSYUeg9D54O/rU6u5Zo1hRRcMeEEdBE4WAOg6z7xtUfg2U3rwWDHd+Z+p16n409ZI71hKnAJH1umT6GNojBqvs30s3+KuXHAX9Wx1EQIQbedS5U18SUrsvdM9PsrIdoOdKt0tYIYojIT7UNJJ09CRHmPfULn3aC5fm2mq3bIYSpAY+HBn6ok/ZVDYQIpUARLxv7Jd4+yKsVslsFZnLuXLWQIcgr4jERGZKSB78ZqJZ4jVoCjbKmOpEkAegJz79optbwJ8RK6dM6gAdJLKIMZUkGAIyfU1zYusotkEkhQDJmMAY/dA2Hv6QBF06IW4zfttcuQG/4TAvqwP19k5fPQHB8jUv9HtIRJNwzORpWVEj1MSOoqM9w611EyVLCZ2lRj0pvi7hDJBxqKke9CQfmI+NTpsJ0HN+KLa1AUKVWAoAyLluNvKT86iC+RbT3H++x/GovH8S4vm2QNBs6gYzq75Jz8BUfhnwROzfIH/Oal7MlcCcbzUpcS2RIuAgERhgcfDP2+lO3HJVgDBIgHy9arebvbIVtQLowZQDvBkj12286buc/sjaT9lSpUGhngQRw7qT7BI64CkNjrG9Ruc8PbWD3mseLI1byJ9oA+u1cf6TOoskHXqlWORpkz6CCRHp84D3JQ/uxAH70k/cKOdqiFGnY9waBdZAE6R8JKyRPpqH9b5MWlDaiBsCd+gHlFP2z4WBG4GfL2N/t+VcX1e2pU7sRjfBDA/ZAqhc2KcMrcKob2RbVomNreMjbpWMt2SFY5CvgeWGIj4ZrScDzHXw4WfqaD7wsfwmqmxYUKsvGsksekBSVmPj86pHYvOnVDfNbqkWzugUID5hZEwD5z1qNYs6ZzuF8tmEwR0OB1qzhHNpF6MjPJXSMkmM59wxneot8q11yq6R5YPROo9fvq5R9yNcSm9FTbomW+ew2FILI93y/ChFEUJTTpmrA2QI3M+v+VMXbMUsUQ7i11wzMrSu/QwDHunrTvdzXQt+pqSDi7eZ/Exk+ePIeXupF6/n87U86Sckk+tcFaEjYcD/P8muT+c1JXhSQDGMgepByPfkfMU4vDUIIiXCNvvrY/RzzAcPxffFcrZuAaQhIYlBI17CNQxmGMVme4g5FX/Yy2h4ka1DLpYwdpERNQD0fhvpDvu6olprmskBW0yc4CqtuSQN8x7qXjueaxq4izdtyQVCqAz4BFu65YnTDSFge4bCv4rj1U6QxUwQCnh67wpEzsfOqjnHEi6mlnZiOphpB3jbSd9h55qrZVnFzjLik6ioHtEApmA3Rj7UlsSfTapPD8epEEltKgajiIyFIzgZkzG28xWSSxk5kekHrOPM+8da0dsxp0x5yYEnoYHXr8qrSsQ5ss++KjTHukdJiDHTY7VG5FxX66ZzOfn6GmX4o+0IkgEbzJnT6GcjPUH0rjk7k3RI8sdflgelSWyHqfO+cLwx1aNTsIGwXAWCx8hnFYbmHMne8SxBZyBPiidC4CqMnTqjHT1NW/axyoTxK4OrwuPCQqoWxkdQM+nwy/DcYvdu13wkhYlh7QQjcnVk6R/X8s1dNcktMuLj7ZEZgddpk/M/Kq/iuKChmMwD6GPG2fgcz0yao+Y89QxpbUsOrKJUnVswY+k/P5RTztu6uXAig6gIJJEEGTiDUkIuOI4gjvLhXWNCMAcT3ZJYTnIOflXPCX2S1LuJUwT+6D19dP2iayF/m9851xiPCAMGTGfhUS6xcglid953B9fgaglmt5hzi0CIdW04EE5zqIkTHiVP7VV3G9qVbFtCYhpbAEEe85mPiKoLFnAOPrnJMQunoM9em/wAKZtxBny+PTceVSQaHhOcNfc61AhGIjYDXbnJMmY9Nqp+d3W7xgCQMCdpGCPfBJ+ZqXyZhODnunkCP5RDB8sZ+VQOckd63nifkNvKoJIqSCDqIPmCcY9M52rm9ZhFbzJ+yuzd679cz61w1xmVVj2ZiJJM1JBwoEAZmcmRHpAj+NP2iFUsT9ZcZzHwj5xU/g+z/ABt22LicPca2IIMAe2wAIBMkEkZ8pOwNVz2Ghj+yRqGxWdjHkSYn3eYkCW98spUjpPzO2KZuMWgn1J+X+dRHdhgk9D123FSzy69qNvu2LiNQAmJAIyMZBHzioomxnheJZCY28v41JN9GBlskECZPTr+etR7/AAlxZLW2AWJlSIn3itR2d7BnirPejiUtvoLpbZZLQf2tWBEHac7HJo6G5muJZDG84J9rOWnJ/OK4biBgqDj5ZAn7q0rdmL1xzYZCHAWbgQlXPhJYFZ1RJUgdSCYJaKmx2Z4xrnd/o90RMnQ+mAMnVEEYx51GpE0yI3EgjODVj3tvSJdZgdR5D1p+x2M4t5BtaTpldTWxqOuIy0xBPyFdf+gOPO9tAf2TcScnbB88VGuPcnRLsQHuoIIdT6avTeubvEJHtKfSavz9G3EaVdrtlV2Yln9oEzEJ5QM9cCa2o7G8oXQG4ZywtKpAuXIe7B1PAuajJyAsDGwxMa49y2ifY8p1pg6l+Ymm2ZZ9ofMV6iezPL5OrgAIAJPecQv1RsupZOZiN5E4zG43sDw7hZttZAAjuzk7FsuDOFeCTMHY4FR4sR4Ujztbiz7a7dSPxqTw/FJauK/gaJlSV2ZSJE+WqR6gV6FwPZvhbRULZtldThu81MShAjxNKs3hWVUGBq22NwdCAqMhRoIAKwmwMmGBCk+WGO29VeZeRZYmuTzDhCblkqLRYW2ZzdRCVCso1B3UHTkLGQAKmcLya65Om02F1HUNPhgZAaC26mR0I8xW7s3AzElXQIykSTquQoXvNKNqZdJ3IE4EEiB295lfxKdC6iBGkn1k7bGdQj2TpyDUPK/JFliXmzFr2Uusqs5FpRuT42g9QinOdIyR7VW3JezVq34mdnZlB9kJClomC/h6bz+M++ty5Di81pWfdhbdzqUEIGgy094cKRCxIIMWCWdywOW0RbUEqk5MIzEzJMwCBAgZmjyS7l1ij2KXl3BWnLMoutaUKfErIrf1iAWXbaN9zVnxfLbKkBbaiWWNHcFAhEyTchl/mrMyd+q8Y+kqWKsyrcIZkCgBSN220gxvqJnYzIXlvEatIKBIA8Vy2Zc5iVJ8GTgwTgDaqty5JUIcUV93kVl/CLWhixINt3JjADw5YQDpmdgTip1jkVsiGuEDaNWQPFB9mJ290kepg8I6h4Th3LFx+uYqA8EQ7EEKxGDpWR6YFdNxtm0Pa0rbiYUII8WAuCoJBGYOD5VKcmQ4xXl6HXHcqtKfAwAiRrYHVnBUAg48QiDVpynlSHuiqqQ3iBJbvIOcBSNXyEYFQOOvXXUF0Uo2gi0FYkLMyWAAYgbpIHqcLVhyMC06aQ7IWDEkMNOSFViBkyMqNtziJRbsSjGuBrmXBpxlxLbFlYT4xBxEkGcn2TGcTVF+jsg0qZ0lR4vUavI4gx6+dFFWm247mTSGn5RbvScjcyAqnr5fn30nB9nE723YLsVuXLcggeY8PugMPjRRWOLLK6shJVZO7UdlOHN0XQDbV1ylvSqgoxtyFCgCQAcevUzVJc5BZcBfEAskQRPi0mJjI23n7TJRWksktbVl4wi/IG7McOoJYMQM+238IAqTZ7M8KPF3ciBEs/QkEkaqSiqeJJ+Zv4cUuBriuS2LKNcRIOnSYLdSCYkwPlT3JuVWb62gbalmY5IjK6yJYZIhGEe74FFbJtx5MpJKXBajsitpf9lZ9og+02SCSRqG8QJx7hUH/RSJc8CqLkklhKjxdfD4m9qNx1zmkoqMvs1RMN07LAK6rIuv4sYa6AZIHiBc43xJH30xxPLLQ7y49sM2zE+ItOlANRExlR7p9ACisFJs00peQ/w/K7UnRatrEMPCP3SBMeTAbdPQU7csKsD9ktMQAdGoHEerQJ+UkUUVCbZaey2JAC5kZWdQPiBKkyyk+yceXTpVpb8epV8Pi0mOphP4Mc5joKKKSC4Evtm4Niuc+JZhThcCMfkmag3L6tq1A6QYIDHxAwYKnGzLnOS0BepRWaYbJI4UFV0YHhBBJgwSBgbxkSZx0p4JLQTIyRMnK5ztO+D9mBSUVTkltoa4zjPE0LspbViQIciBEThvLpUfmFxW3Hsey0CQSROARiI6/eZSirlU9hLGpkW8sFWBdtROtsE53EyfcM7zg4lnIg7EdGiJ6CFwIUn3++QUVrB7FOWdcQ+m6kzr0HURAUkWy2VAzPnjYCIqu4FxfQultVViQwM+JrZI1RmCJYiPPpRRWq4IfJL4S8Bdt22WdR0Icgy0nxMCCqzBIH7PkaTmgDXkciF9mAWbVMqutSQCASDBJHoaKKrLYut6EezbYXrwUK1sW0LgeMl22kMPDkTEH5Zc4XgmFs3TcGjLqChZvEAQTLjxSR9YgQI6QUVEtnRVPllM/PJvXFLOwSAFYLo1BipcBSCCIMCYGDvUvgr7i5ecsrXAGtiFKLLgAfXYmNJGqQTPmTRRWsikdyxPLLq2wLtxWuMAp0LpSDpAydTtpGRJ3Jqiv2LNkoTbGp3S3jUQzXBC65YHSJBwcGYGTRRWcH7VF5+6WnD8c1xGVYgELAm2RIY4YFsBRG0kiZHS25Vwem7OtiGAZVxpDSfEZ8TGcbxA2miipXvBq4n/2Q=="
            />
            <NewsItem
              type="economy"
              title="Alman iş dünyası temkinli iyimser"
              description=". Anket, ilkbahar aylarındakine göre biraz daha olumlu bir yaklaşım ortaya koysa da, şirketler zor sürecin etkilerinin kısa ve orta vadede hemen ortadan kalkmayacağı görüşünde. AHK üyeleri arasında altı ayda bir düzenlenen World Business Outlook'un sonuçları pandeminin Türkiye'de ortaya çıktığı ilkbahar aylarına göre iyimserliğin arttığını gösteriyor. "
              imageUrl="https://im.haberturk.com/2020/12/03/ver1607244309/2890950_810x458.jpg"
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fafafa',
    padding: 25,
    marginBottom: 25,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default App;
