package camt.se331.shoppingcart.config;

import com.jolbox.bonecp.BoneCPDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.hibernate4.HibernateExceptionTranslator;
import org.springframework.orm.jpa.JpaDialect;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaDialect;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;

/**
 * This configuration class configures the persistence layer of our example application and
 * enables annotation driven transaction management.
 *
 * This configuration is put to a single class because this way we can write integration
 * tests for our persistence layer by using the configuration used by our example
 * application. In other words, we can ensure that the persistence layer of our application
 * works as expected.
 *
 * @author Petri Kainulainen
 */

class PersistenceContext {
    private static final String[] ENTITY_PACKAGES = {
            "camt.se331.shoppingcart.entity"
    };

    private static final String PROPERTY_NAME_HIBERNATE_DIALECT = "hibernate.dialect";
    private static final String PROPERTY_NAME_HIBERNATE_FORMAT_SQL = "hibernate.format_sql";
    private static final String PROPERTY_NAME_HIBERNATE_HBM2DDL_AUTO = "hibernate.hbm2ddl.auto";
    private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL = "hibernate.show_sql";
    private static final String PROPERTY_NAME_DB_DRIVER_CLASS = "db.driver";
    private static final String PROPERTY_NAME_DB_PASSWORD = "db.password";
    private static final String PROPERTY_NAME_DB_URL = "db.url";
    private static final String PROPERTY_NAME_DB_USER = "db.username";



}