package camt.se331.shoppingcart.repository;

import camt.se331.shoppingcart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by macbookpro on 3/22/16 AD.
 */
public interface ProductRepository extends JpaRepository<Product,Long> {
}
